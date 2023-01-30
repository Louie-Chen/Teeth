//至頂功能
$(function () {
  var $win = $(window);
  var $backToTop = $('.js-back-to-top');
  var $headerTop =$('.site-header');
  var $headerRun =$('.site-header2');
  // 當用戶滾動到離頂部100像素時，展示回到頂部按鈕
  $win.scroll(function () {
    if ($win.scrollTop() > 50) {
      $backToTop.show();
      $headerTop.hide();
      $headerRun.show();
    } else {
      $backToTop.hide();
      $headerTop.show();
      $headerRun.hide();
    } 
  });
  // 當用戶點擊按鈕時，通過動畫效果返回頭部
  $backToTop.click(function () {
    $('html, body').animate({scrollTop: 0}, 200);
  });
});
