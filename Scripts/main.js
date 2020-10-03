const { format, maybeFormat } = require("./trailingNewline");

nova.commands.register("TrailingNewline.format", (workspace) => {
  const editor = workspace.activeTextEditor;
  const document = editor.document;

  format(editor);
});

exports.activate = function () {
  nova.workspace.onDidAddTextEditor((editor) => {
    return editor.onWillSave((editor) => {
      maybeFormat(editor);
    });
  });
};

exports.deactivate = function () {
  // Clean up state before the extension is deactivated
};
