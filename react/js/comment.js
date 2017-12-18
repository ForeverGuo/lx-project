/**
 * Created by Administrator on 2016/12/13.
 */


var coments =[
    {"author":"张三","data":"3分钟前","text":"今天天气不错"},
    {"author":"李四","data":"5分钟前","text":"今天天气不错"},
    {"author":"王五","data":"7分钟前","text":"今天天气不错"}
];
var CommentBox = React.createClass({
    render:function () {
        return (
            <div>
                <div className="ui comments">
                    <h1>评论</h1>
                    <div className="ui divider"></div>
                    <CommentList data={this.props.data} />
                    <CommentForm />
                </div>
            </div>
        )
    }
});

var CommentList = React.createClass({
    render:function () {

        var data = this.props.data;
        console.log(data);
        var commentNodes = data.map(function (comment) {
             return(
                 <Comment author={comment.author} data={comment.data}>
                     {comment.text}
                 </Comment>
             )
        });
        return(
            <div>
                {commentNodes}
            </div>
        )
    }
});

var CommentForm = React.createClass({
    render:function () {
        return(
            <form className="ui reply form">
                <div className="field">
                    <input type="text" placeholder="姓名"/>
                </div>
                <div className="field">
                    <textarea placeholder="评论。。。">
                    </textarea>
                </div>
                <input type="submit" className="ui blue button" placeholder="添加评论"/>
            </form>
        )
    }
});

var Comment = React.createClass({
    render:function () {
        return(
                <div className="comment">
                    <div className="content">
                        <span className="author">
                            {this.props.author}
                        </span>
                        <div className="metadata">
                            <span className="data">
                                {this.props.data}
                            </span>
                        </div>
                        <div className="text">
                            {this.props.children}
                        </div>
                    </div>
                </div>
        )
    }
});

ReactDOM.render(<CommentBox data={coments} />,document.getElementById('box'));