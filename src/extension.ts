import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "ergate" is now active!');

	let disposable = vscode.commands.registerCommand('ergate.bootstrap', () => {
		vscode.window.showInformationMessage('Ergate for vscode!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
