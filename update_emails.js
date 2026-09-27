const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

walk('src', (filePath) => {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;

        // Replace content emails
        content = content.replace(/hello@qodeclicks?\.com/g, 'info@qodeclicks.com');
        content = content.replace(/support@qodeclicks?\.com/g, 'info@qodeclicks.com');
        content = content.replace(/careers@qodeclicks?\.com/g, 'info@qodeclicks.com');
        content = content.replace(/press@qodeclicks?\.com/g, 'info@qodeclicks.com');
        content = content.replace(/accounts@qodeclicks?\.com/g, 'info@qodeclicks.com');

        // Update forms
        content = content.replace(/<form[^>]*>/g, (match) => {
            // Remove onSubmit if it exists
            match = match.replace(/\s*onSubmit=\{[^}]+\}/, '');
            // If it already has an action, replace it, else add it
            if (match.includes('action=')) {
                return match;
            }
            return match.replace('<form', '<form action="https://formsubmit.co/info@qodeclicks.com" method="POST"');
        });

        // Add name attributes to inputs if missing
        content = content.replace(/<input([^>]+)>/g, (match, p1) => {
            if (!match.includes('name=')) {
                if (match.includes('type="email"')) return `<input name="email"${p1}>`;
                if (match.includes('type="text"')) return `<input name="name"${p1}>`;
                if (match.includes('type="url"')) return `<input name="website"${p1}>`;
                if (match.includes('type="tel"')) return `<input name="phone"${p1}>`;
            }
            return match;
        });

        content = content.replace(/<textarea([^>]+)>/g, (match, p1) => {
            if (!match.includes('name=')) {
                return `<textarea name="message"${p1}>`;
            }
            return match;
        });

        if (content !== original) {
            fs.writeFileSync(filePath, content);
            console.log('Updated: ' + filePath);
        }
    }
});
