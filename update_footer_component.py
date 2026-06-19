import re
from pathlib import Path

root = Path(__file__).resolve().parent
html_files = sorted(root.rglob('*.html'))
footer_tag = '<footer-component></footer-component>'
footer_re = re.compile(r'<footer\b[^>]*>[\s\S]*?</footer>', re.IGNORECASE)
year_re = re.compile(
    r'<script>[\s\S]*?document\.getElementById\("year"\)\.textContent\s*=\s*new Date\(\)\.getFullYear\(\);[\s\S]*?</script>',
    re.IGNORECASE,
)
script_tag = '<script src="components/footer-component.js" type="text/javascript"></script>'
nav_script = '<script src="components/nav-component.js" type="text/javascript"></script>'

updated = 0
removed = 0
scripts_added = 0

for path in html_files:
    text = path.read_text(encoding='utf-8')
    original = text

    if footer_re.search(text):
        text = footer_re.sub(footer_tag, text)
        removed += 1

    if year_re.search(text):
        text = year_re.sub('', text)

    if footer_tag in text and script_tag not in text:
        if nav_script in text:
            text = text.replace(nav_script, nav_script + '\n  ' + script_tag)
            scripts_added += 1
        elif '</body>' in text:
            text = text.replace('</body>', '  ' + script_tag + '\n</body>')
            scripts_added += 1

    if text != original:
        path.write_text(text, encoding='utf-8')
        updated += 1

print(f'Processed {len(html_files)} HTML files')
print(f'Removed footer blocks from {removed} files')
print(f'Added component script to {scripts_added} files')
print(f'Updated {updated} files')
