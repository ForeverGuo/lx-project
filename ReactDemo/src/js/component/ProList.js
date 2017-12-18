
var ListModule = React.createClass({
    getDefaultProps:function () {
        return {
            listData:[]
        }
    },
    handleClick:function (index) {
        alert(index)
    },
    render:function () {
        return(
            <ul>
                {
                    this.props.listData.map(function (ele,index) {

                        return <li onClick={this.handleClick.bind(this,index)} key={index}>{ele}</li>
                    }.bind(this))
                }

            </ul>
        )
    }
});


module.exports = ListModule;
