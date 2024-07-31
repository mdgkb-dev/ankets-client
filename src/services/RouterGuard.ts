import { NavigationGuardNext } from 'vue-router';

export default abstract class RouterGuard {
  static async Auth(next?: NavigationGuardNext): Promise<void> {
    if (next) {
      next();
    }
  }

  static Dev(): void {
    // if (!UserService.isAdmin()) {
    //   router.push('/dev');
    // }
  }
}
