var Header  = require("./component/Header");
var Footer  = require("./component/Footer");
var ProList  = require("./component/ProList");
var Content  = require("./component/Content");

var ListPage = React.createClass({

    render:function () {
       return (
       	<div>
       		<Header title="列表" />
			<Content>
				<ProList listData={["列表1","列表2"]} />
			</Content>
			<Footer/>
       	</div>
       	)
    }
});


module.exports=ListPage;