import { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  },
  {
    tab: "Section 3",
    content: "I'm the content of the Section 3"
  }
]

export const useTabs = (initialTab, allTabs) => {
  // React Hook의 규칙: 최상위에서만 Hook을 호출해야 한다. 반복문, 조건문 혹은 중첩된 함수 내에서 Hook을 호출하면 안된다.
  const [curIndex, setCurIndex] = useState(initialTab)

  // 탭의 내용이 없거나, 배열이 아닌 경우 종료한다.
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return { 
    curItem: allTabs[curIndex],
    changeItem: setCurIndex
  }
};

function Tabs() {
    const { curItem, changeItem } = useTabs(0, content);

    return (
        <>{
                content.map((section, index) => (
                    <button key={index} onClick={() => changeItem(index)}>{section.tab}</button>
                ))
            }
            <h3>{curItem.content}</h3>
        </>
    )
}

export default Tabs;