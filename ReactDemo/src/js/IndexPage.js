/**
 * Created by hasee on 2016/11/1.
 */

var Header  = require("./component/Header");
var Footer  = require("./component/Footer");
var ProList  = require("./component/ProList");
var Content  = require("./component/Content");

var IndexPage = React.createClass({

    render:function () {
       return (
       	<div>
       		<Header title="首页" />
			<Content>
				<ProList listData={[1,2,3,4]} />
			</Content>
			<Footer/>
       	</div>
       	)
    }
});


module.exports=IndexPage;