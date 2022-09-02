import React from 'react';
import moment from 'moment';
import Image from 'next/image';


const PostDetail = ({ post }) => {
  const myLoader = ({ src }) => {
    return `${src}`
  }

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

      if (obj.href) {
        modifiedText = ( <a className="underline text-indigo-600" key={index} href={obj.href} target="_blank" rel="noreferrer">{obj.children[0].text}</a> )
      }

    }

    switch (type) {
      case 'heading-two':
        return <h2 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <Image
            loader={myLoader}
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      case 'code-block':
          let iframeCode = obj.children[0].text;
          return <span key={index} className="flex justify-center" dangerouslySetInnerHTML={{__html: iframeCode}}></span>;
      case 'link':
          let text = obj.children[0].text;
          let href = obj.href;
          return <a href={href}>{text}</a>
      default:
        return modifiedText;
    }
  };
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-5 md:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden mb-6'>
        <Image
          loader={myLoader} 
          src={post.featuredImage.url}
          alt={post.title}
          width="890px"
          height="500px"
          className='object-top h-full w-full rounded-t-lg'
        />
        <div className='px-4 lg:px-0 text-sm lg:text-base'>
          <div className='flex items-center my-6 w-full'> 
            <div className='flex items-center lg:mb-0 w-full lg:w-auto mr-8'>
                <Image
                    loader={myLoader} 
                    alt={post.author.name}
                    height="60px"
                    width="60px"
                    className="align-middle rounded-full"
                    src={post.author.photo.url}
                />
                <p className='inline align-middle text-gray-700 ml-4'>{post.author.name}</p>
            </div>
            <div className='font-medium text-gray-700'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>
                    {moment(post.createdAt).format('MMM DD, YYYY')}
                </span>
            </div>
          </div>
          <h1 className='mb-8 text-2xl lg:text-3xl font-semibold'>
            {post.title}
          </h1>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item,  itemindex) =>
            getContentFragment(itemindex, item.text, item));
            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </div>
  )
}

export default PostDetail;