namespace Lelouch {
	export class StartupCommand extends puremvc.MacroCommand implements puremvc.ICommand {
		public constructor() {
			super();
		}

		public initializeMacroCommand(): void {
            this.addSubCommand(PrepareControllerCmd);
            this.addSubCommand(PrepareModelCmd);
            this.addSubCommand(PrepareViewCmd);
        }
	}
}