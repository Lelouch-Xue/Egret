namespace Lelouch {
	export class AppFacade extends puremvc.Facade implements puremvc.IFacade {
		private static m_instance: AppFacade;

		public constructor() {
			super("Holo-Egret");
		}

		public static getInstance(): AppFacade {
			if (this.m_instance == null ) 
				this.m_instance = new AppFacade();
			return <AppFacade><any>(this.m_instance);
		}

		public initializeController(): void {
			super.initializeController();

			this.registerCommand(Lelouch.SystemNotify.APP_STARTUP,StartupCommand);
		}

		/**
		 * 启动PureMVC，在应用程序中调用此方法，并传递应用程序本身的引用
		 */
		public startUp(rootView: egret.DisplayObjectContainer): void {

			this.sendNotification(SystemNotify.APP_STARTUP, rootView);

			this.removeCommand(SystemNotify.APP_STARTUP); //PureMVC初始化完成，注销STARUP命令
		}
	}
}