import React,{Component} from 'react';
import './Directory.component.style.scss';
import MenuItem from '../menu-item.component/Menu.item.component'
class DirectoryMenu extends Component{
    constructor(props){
        super(props);
        this.state={
            sections:[
                {
                    title:'hats',
                    imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                    id:'1'
                },
                {
                    title:'jackets',
                    imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
                    id:'2'
                },
                {
                    title:'snekers',
                    imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id:'3'
                },
                {
                    title:'mens',
                    imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
                    id:'4',
                    size:'large'

                },
                {
                    title:'womens',
                    imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
                    id:'5',
                    size:'large'
                }

        ]}
    }
    render(){
        return(
            <div className="directory-menu">
            {this.state.sections.map(({title,imageUrl,id,size})=>
                <MenuItem key={id}title={title}imageUrl={imageUrl}size={size}/>                )}
            </div>
        )}
    
}
export default DirectoryMenu;