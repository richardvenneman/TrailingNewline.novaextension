const RE = /[\n]*$/g;

async function format(editor) {
  editor.edit((textEditorEdit) => {
    const document = editor.document;
    const range = new Range(0, document.length);
    const text = editor.getTextInRange(range);
    const formatted = text.replace(RE, '') + '\n';

    if (text !== formatted) {
      textEditorEdit.replace(range, formatted);
    }
  });
}

async function maybeFormat(editor) {
  if (isFormatBeforeSavePreferenceEnabled()) {
    format(editor);
  }
}

function isFormatBeforeSavePreferenceEnabled() {
  return nova.config.get("TrailingNewline.formatBeforeSave");
}

module.exports = { format, maybeFormat }
