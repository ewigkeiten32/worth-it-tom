class GoalsController < ApplicationController

  def create
    # binding.pry
    @user = current_user
    @goal = Goal.new(goal_params)
    @goal.user = @user
    @goal.save

    redirect_to dashboard_path(current_user)
  end

  def destroy
    @goal = Goal.find(params[:id])
    @goal.destroy

    redirect_to dashboard_path(current_user)
  end

  def update
    @goal = Goal.find(params[:id])
    @goal.update(goal_params)

    redirect_to dashboard_path(current_user)
  end

  def edit
    @goal = Goal.find(params[:id])
  end

  private

  def goal_params
    params.require(:goal).permit(:name, :due_date, :amount, reason_attributes: [:description])
  end
end
