#!/bin/bash

# Generate PDF resume from HTML template using Chrome headless

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

# Try to find Chrome
if [[ -x "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" ]]; then
  CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
elif command -v google-chrome &> /dev/null; then
  CHROME="google-chrome"
elif command -v chromium &> /dev/null; then
  CHROME="chromium"
else
  echo "Error: Chrome or Chromium not found"
  exit 1
fi

echo "Generating PDF resume..."

"$CHROME" \
  --headless=new \
  --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf="$PROJECT_DIR/public/jack-novotny-resume.pdf" \
  "$SCRIPT_DIR/resume.html" \
  2>&1

if [[ $? -eq 0 ]]; then
  echo "PDF generated successfully: public/jack-novotny-resume.pdf"
else
  echo "Error generating PDF"
  exit 1
fi
