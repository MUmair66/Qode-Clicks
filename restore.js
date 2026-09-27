const fs = require('fs');

const transcriptPath = 'C:/Users/iTitans/.gemini/antigravity/brain/e4314437-740d-4ebb-aa8b-f6f9435780ad/.system_generated/logs/transcript_full.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

for (const line of lines) {
    if (!line.includes('write_to_file')) continue;
    try {
        const obj = JSON.parse(line);
        if (obj.tool_calls) {
            for (const tc of obj.tool_calls) {
                if (tc.name === 'write_to_file') {
                    let file = tc.args.TargetFile;
                    
                    if (file.includes('ads\\page.tsx')) {
                        let code = tc.args.CodeContent;
                        let dest = file.replace(/\\/g, '/').replace('src/app/services', 'src/app');
                        console.log('RESTORING TO:', dest);
                        fs.mkdirSync(dest.substring(0, dest.lastIndexOf('/')), {recursive: true});
                        fs.writeFileSync(dest, code);
                        console.log('SUCCESS');
                    }
                }
            }
        }
    } catch(e) { }
}
