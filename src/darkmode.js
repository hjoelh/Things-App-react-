import React from 'react';

class DarkMode extends React.Component  {



    render(props) {
        return (



            <div className='switch darkSwitch' id='darkSwitch'>
                <label>
                🌕 
                <input type='checkbox' onClick={this.props.toggle} />
                    <span className='lever'> </span>
                    🌑 
                </label>

                


                </div>

                

                
        

         





        )
    }


}


export default DarkMode;