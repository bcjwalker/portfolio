// This neat bit of code was provided by https://www.emgoto.com/react-table-of-contents/
// Thanks for making my life easier

import {useState, useRef, useEffect} from 'react'

/**
 * Dynamically generates the table of contents list, using any H2s.article-h2 it can find in the main text
 */
const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([]);
  
  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("h2.article-h2")
    );
  
    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);
  
  return { nestedHeadings };
};

const getNestedHeadings = (headingElements) => {
  const nestedHeadings = [];
  
  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading;

    nestedHeadings.push({ id, title, items: [] });
  });

  return nestedHeadings;
};

/**
 * This renders an item in the table of contents list.
 * scrollIntoView is used to ensure that when a user clicks on an item, it will smoothly scroll.
 */
const Headings = ({ headings, activeId }) => (
  <ul>
    {headings.map((heading) => (
      <li key={heading.id} className={`navbox-2-btn ${heading.id === activeId ? "active" : ""}`}>
        <a onClick={() => document.getElementById(heading.id)?.scrollIntoView({behavior: 'smooth', block: 'start'})}>
        {heading.title}</a>
      </li>
    ))}
  </ul>
);
  
/**
 * This tracks which header is active and adds active styling
 */
const useIntersectionObserver = (setActiveId, activeId) => {
  const headingElementsRef = useRef({});
  useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      // Get all headings that are currently visible on the page
      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id) =>
        headingElements.findIndex((heading) => heading.id === id);

      // If there is only one visible heading, this is our "active" heading
      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
        // If there is more than one visible heading,
        // choose the one that is closest to the top of the page
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );

        setActiveId(sortedVisibleHeadings[0].target.id);
      }

      // If there are no visible headings, and we are scrolling back up, we want to make sure
      // the correct header is highlighted.
      // Shoutout to Heisman2 for this addition, and Ky Wildermuth for originally suggesting it!
      if (visibleHeadings.length === 0) {
        const activeElement = headingElements.find((el) => el.id === activeId);
        const activeIndex = headingElements.findIndex(
          (el) => el.id === activeId
        );

        const activeIdYcoord = activeElement?.getBoundingClientRect().y;
        if (activeIdYcoord && activeIdYcoord > 150 && activeIndex !== 0) {
          setActiveId(headingElements[activeIndex - 1].id);
        }
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "40px 0px -40% 0px"
    });

    const headingElements = Array.from(document.querySelectorAll("h2.article-h2"));

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId, activeId]);
};

/**
 * Renders the table of contents.
 */
function TableOfContents() {
  const [activeId, setActiveId] = useState();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId, activeId);

  return (
    <>
    <nav className='projects-nav' aria-label="Table of contents">
      <label className='projects-nav-label'>Page contents</label>
      <Headings headings={nestedHeadings}  activeId={activeId}/>
    </nav>
    </>
  );
};

export default TableOfContents;