from django.urls import path
from .views import AddUserSkillView, PublicUserSkillsView, DeleteUserSkillView

urlpatterns = [
  path('add-skills/', AddUserSkillView.as_view(), name='add-user-skills'),
  path('delete/<int:skill_id>/', DeleteUserSkillView.as_view(), name='delete-user-skills'),
  path('<int:user_id>/', PublicUserSkillsView.as_view(), name='public-user-skills'),
]
