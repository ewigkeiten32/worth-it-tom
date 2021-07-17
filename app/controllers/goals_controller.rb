class GoalsController < ApplicationController
  def create
    @user = current_user
    @goal = Goal.new(goal_params)
    @goal.user = @user
    if @goal.save
      redirect_to dashboard_path(current_user)
    else
      render :new
    end
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

  private

  def goal_params
    params.require(:goal).permit(:name, :due_date, :amount)
  end
end
