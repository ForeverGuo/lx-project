
var ContentModule = React.createClass({
    render:function () {
        return(
            <div className="content">{this.props.children}</div>
        )

    }
});

module.exports = ContentModule;