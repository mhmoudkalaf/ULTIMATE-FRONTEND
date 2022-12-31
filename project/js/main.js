let showHideSidebarIcon = document.querySelector('.sidebar .sidebar-footer .toggle-icon');
let sidebar = document.querySelector('.page .sidebar');
let contentArea = document.querySelector('.page .content-area');

showHideSidebarIcon.addEventListener('click', () => {
  showHideSidebarIcon.classList.toggle('hidden-sidebar');
  sidebar.classList.toggle('hidden-sidebar');
  contentArea.classList.toggle('hidden-sidebar');
});