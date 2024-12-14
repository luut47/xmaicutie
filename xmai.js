document.addEventListener("DOMContentLoaded", function () {
  // Lấy các phần tử ảnh và nút
  const images = document.querySelectorAll(".ratio img");
  const btnAccept = document.querySelector(".nut_bam button:nth-child(1)");
  const btnDenied = document.querySelector(".nut_bam button:nth-child(2)");

  let currentIndex = 3; // `main.gif` là ảnh ban đầu (index = 3)

  // Cập nhật hiển thị ảnh
  function updateSlider() {
    images.forEach((img, index) => {
      img.style.display = index === currentIndex ? "block" : "none"; // Hiện ảnh hiện tại, ẩn các ảnh khác
    });
  }

  // Hàm xử lý khi bấm "Em đồng ý" (giảm chỉ số)
  btnAccept.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--; // Giảm vị trí hiện tại nếu chưa đến ảnh đầu tiên
    }
    if (currentIndex == 0) {
     alert("Chúc mừng em đã trở thành người yêu của Thắng đẹp trai siêu cấp VIP pro!");
    }
    const currentFontSize = parseFloat(
      window.getComputedStyle(btnAccept).fontSize
    );
    const currentPadding = parseFloat(
      window.getComputedStyle(btnAccept).paddingTop
    );
    const currentWidth = parseFloat(window.getComputedStyle(btnAccept).width);
    const currentHeight = parseFloat(window.getComputedStyle(btnAccept).height);

    // Giảm kích thước dần (giới hạn không nhỏ hơn 5px hoặc 20px với width/height)
    if (currentFontSize > 5) {
      btnAccept.style.fontSize = `${currentFontSize + 2}px`; // Giảm font-size
    }
    if (currentPadding > 2) {
      btnAccept.style.padding = `${currentPadding + 2}px`; // Giảm padding
    }
    if (currentWidth > 40) {
      btnAccept.style.width = `${currentWidth + 40}px`; // Giảm chiều rộng
    }
    if (currentHeight > 20) {
      btnAccept.style.height = `${currentHeight + 24}px`; // Giảm chiều cao
    }
    updateSlider();
  });

  // Hàm xử lý khi bấm "Không!" (tăng chỉ số và thu nhỏ nút "Không!")
  btnDenied.addEventListener("click", function () {
    if (currentIndex < images.length - 1) {
      currentIndex++; // Tăng vị trí hiện tại nếu chưa đến ảnh cuối cùng
    }
    if (currentIndex == images.length - 1) {
      alert("em hết iu anh rồi ạ :((");
    }
    // Lấy kích thước hiện tại của nút
    const currentFontSize = parseFloat(
      window.getComputedStyle(btnDenied).fontSize
    );
    const currentPadding = parseFloat(
      window.getComputedStyle(btnDenied).paddingTop
    );
    const currentWidth = parseFloat(window.getComputedStyle(btnDenied).width);
    const currentHeight = parseFloat(window.getComputedStyle(btnDenied).height);

    // Giảm kích thước dần (giới hạn không nhỏ hơn 5px hoặc 20px với width/height)
    if (currentFontSize > 5) {
      btnDenied.style.fontSize = `${currentFontSize - 1}px`; // Giảm font-size
    }
    if (currentPadding > 2) {
      btnDenied.style.padding = `${currentPadding - 1}px`; // Giảm padding
    }
    if (currentWidth > 40) {
      btnDenied.style.width = `${currentWidth - 15}px`; // Giảm chiều rộng
    }
    if (currentHeight > 20) {
      btnDenied.style.height = `${currentHeight - 9}px`; // Giảm chiều cao
    }

    updateSlider();
  });

  // Hiển thị ảnh mặc định ban đầu (main.gif)
  updateSlider();
});
