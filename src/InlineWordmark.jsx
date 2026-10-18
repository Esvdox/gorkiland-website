import {Children,cloneElement,isValidElement} from 'react';
const brandPattern=/(ГоркиLand|ГоркиLAND|ГОРКИLAND|GorkiLand)/gi;
export function InlineWordmark(){return <span className="inline-wordmark" role="img" aria-label="ГоркиLand"><span className="sr-only" aria-hidden="true">ГоркиLand</span></span>;}
// Transform rendered copy, never attributes, source data, form values or metadata.
export function brandify(node){
 if(typeof node==='string')return node.split(brandPattern).map((part,i)=>/^(ГоркиLand|GorkiLand)$/i.test(part)?<InlineWordmark key={`brand-${i}`}/>:part);
 if(Array.isArray(node))return Children.map(node,child=>brandify(child));
 if(!isValidElement(node)||node.type===InlineWordmark||['input','textarea','script','style','code','pre','svg'].includes(node.type))return node;
 // Technical contact addresses must remain readable and copyable as plain text.
 if(node.type==='a'&&/^(mailto:|tel:)/i.test(node.props.href||''))return node;
 if(node.props.children===undefined)return node;
 return cloneElement(node,undefined,brandify(node.props.children));
}
