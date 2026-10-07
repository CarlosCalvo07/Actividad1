export class DashboardController {
  constructor(getDashboard) {
    this.getDashboard = getDashboard;
  }

  get = async (req, res, next) => {
    try {
      const result = await this.getDashboard.execute(req.user);

      return res.status(200).json({
        success: true,
        data: result
      });
    } catch (error) {
      next(error);
    }
  };
}