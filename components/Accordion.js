import React, { useState } from 'react';

const Accordion = ({ about }) => {
  const [isActive, setIsActive] = useState(false);

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;
    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }

    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
        case 'code-block':
            let iframeCode = obj.children[0].text;
            return <span key={index} className="flex justify-center" dangerouslySetInnerHTML={{__html: iframeCode}}></span>
      default:
        return modifiedText;
    }
  };

  return (
    
    <div className="accordion-item bg-white shadow-lg rounded-lg p-8 mb-8 transition duration-700 ease">
      <div className="accordion-title text-lg lg:text-xl cursor-pointer font-semibold " onClick={() => setIsActive(!isActive)}>
        <div><span>{isActive ? '-' : '+'}</span> {about.title}</div>
      </div>
      {isActive && <div className="accordion-content mt-4 leading-7">
        {about.content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item,  itemindex) =>
              getContentFragment(itemindex, item.text, item));
              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
      </div>}
    </div>
  )
}

export default Accordion