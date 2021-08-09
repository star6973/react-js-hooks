import { useEffect, useState } from 'react';

export const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);

  // 제목 업데이트
  return setTitle;
};

function Title() {
  const titleUpdater = useTitle("Loading ...");

  setTimeout(() => titleUpdater("Home"), 5000);

  return (
    <></>
  );
}

export default Title;