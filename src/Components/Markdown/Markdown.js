import React, {Component} from 'react';

class CustomMarkdown extends Component{

    customMarkdownParse(data){

    let paragraphStart = 0, aStart=0, aEnd=0;
    let paragraphEnd = 0;
    let fetchLink = false;
    let linkStart = -1;
    let fragments = {
      type: [],
      content: {
        data: [],
        link:[]
      }
    }

    for(let i=0; i<data.length; i++)
    {
      if(data[i] === '[' && !fetchLink)
      {
        paragraphEnd = i;
        aStart = i+1;
      }
      if(data[i] === ']' && data[i+1] === '(' && !fetchLink)
      {
        fragments.type.push('p');
        fragments.content.data.push(data.substr(paragraphStart, paragraphEnd - paragraphStart));
        fragments.content.link.push('');

        aEnd = i;
        linkStart = i+1;
        fetchLink = true;
      }
      if(data[i] === ')' && fetchLink)
      {
        fragments.type.push('a');
        fragments.content.data.push(data.substr(aStart, aEnd - aStart));
        fragments.content.link.push(data.substr(linkStart+1, i-linkStart-1));
        fetchLink = false;
        paragraphStart = i+1;
      }
    }

    //Handling final paragraph if any
    fragments.type.push('p');
    fragments.content.data.push(data.substr(paragraphStart, data.length));
    fragments.content.link.push('');

    /* Useful for debugging
    let customString = '';
    for(let i=0; i<fragments.type.length; i++)
    {
      if(fragments.type[i] === 'p')
        customString += fragments.content.data[i];
      else if(fragments.type[i] === 'a')
        customString += '<a href="' + fragments.content.link[i] + '">' + fragments.content.data[i] + '</a>';
    }

    console.log(fragments);
    console.log(customString);
    */

      return(
        <span>
          {fragments.type.map((data, i) => (
            <span key={i}>
              {data === 'p' ? <span>{fragments.content.data[i]}</span> : 
              <a className='footer-link' 
                 href={fragments.content.link[i]} 
                 target="_blank" 
                 rel="noopener noreferrer"><b>{fragments.content.data[i]}</b></a>}
            </span>
            ))}
        </span>
        );
    }

    render(){
      return(
        <span>{this.customMarkdownParse(this.props.data)}</span>
        );
    }

}

export default CustomMarkdown;
