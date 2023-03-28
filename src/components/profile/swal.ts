import Swal from "sweetalert2";

type Target = HTMLElement | null;
export const feedbackAlert = () => {
  Swal.fire({
    title: "자유롭게 의견을 적어주세요!",
    html:
      '<input id="swal-input1" class="swal2-input" placeholder="이름 (필수x)" />' +
      '<textarea id="swal-input2" class="swal2-input"  placeholder="내용 - 최대 200자" maxlength="200" />',
    inputAttributes: {
      autocapitalize: "off",
    },
    focusConfirm: false,
    confirmButtonColor: "gold",
    confirmButtonText: "send Feedback",
    showCancelButton: true,
    cancelButtonColor: "rgb(160, 160, 160)",
    preConfirm: () => {
      const name: Target = document.querySelector("#swal-input1");
      const feed: Target = document.querySelector("#swal-input2");
      if (feed) {
        return {
          name: name,
          feed: feed,
        };
      }
    },
  }).then(res => {
    const nameText =
      (res.value!.name as HTMLInputElement)?.value !== ""
        ? (res.value!.name as HTMLInputElement).value
        : "Guest";
    const feedText = (res.value!.feed as HTMLTextAreaElement)?.value;
    if (feedText === "") {
      Swal.fire({
        title: "내용이 없어요ㅠ",
        focusConfirm: false,
        cancelButtonText: "ok...",
        confirmButtonColor: "gold",
      });
    } else {
      Swal.fire({
        title: "이 피드백을 전송할까요?",
        icon: "question",
        focusConfirm: false,
        iconColor: "gold",
        showCancelButton: true,
        confirmButtonText: "보내줘!",
        cancelButtonText: "생각좀...",
        confirmButtonColor: "gold",
        cancelButtonColor: "rgb(160, 160, 160)",
      }).then(() => {
        // console.log(nameText);
        // console.log(feedText);
        // console.log("전송완료");
      });
    }
  });
};
