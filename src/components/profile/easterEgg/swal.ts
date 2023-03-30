import Swal from "sweetalert2";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: `github_pat_${process.env.NEXT_PUBLIC_API_TOKEN}`,
});

const issueUpdate = async (name: string, feed: string) => {
  await octokit.request(
    "POST /repos/LEE-YO-HAN/LEE-YO-HAN.github.io/issues/7/comments",
    {
      owner: "LEE-YO-HAN",
      repo: "LEE-YO-HAN.github.io",
      title: `${name}님 피드백`,
      body: `${name}님 ${feed}`,
      // headers: { // https://github.com/orgs/community/discussions/40619 version in headers -d
      //   "X-GitHub-Api-Version": "2022-11-28",
      // },
    },
  );
};

type Target = HTMLElement | null;
export const feedbackAlert = () => {
  Swal.fire({
    title: "자유롭게 의견을 적어주세요!",
    html:
      '<input id="swal-input1" class="swal2-input" placeholder="이름 (필수x)" maxlength="20" />' +
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
        issueUpdate(nameText, feedText);
        Swal.fire({
          title: "소중한 의견 감사합니다!",
          icon: "success",
          iconColor: "gold",
          confirmButtonColor: "gold",
        });
      });
    }
  });
};
