(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(37)},25:function(e,t,a){},26:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(18),r=a.n(s),i=(a(25),a(1)),l=a(2),c=a(5),m=a(4),d=a(6),u=(a(26),a(14));function p(e){var t=Object(u.a)({},e.commentTree.tx),a=t.out[0].s3+t.tx.h,n=t.out[0].s5,s=t.in[0].e.a,r=a.length/64<6&&e.userId!=t.out[0].s6,i=Object(u.a)({},e.commentTree);delete i.tx,delete i.comments;var l=[];(i=Object.values(i)).sort(function(e,t){return t.comments-e.comments});for(var c=0;c<i.length;c++)l.push(o.a.createElement(p,{replyHandler:e.replyHandler,userId:e.userId,commentTree:i[c]}));return o.a.createElement("div",{className:"comment"},o.a.createElement("div",{className:"comment-metadata"},o.a.createElement("div",{className:"metadata"},t.out[0].s5),o.a.createElement("div",{className:"metadata"},t.timeago),r?o.a.createElement("div",{className:"metadata metadata-button",onClick:function(){return e.replyHandler(a,n,s)}}," reply"):null),o.a.createElement("div",{className:"comment-content"},decodeURIComponent(t.out[0].s4)),l)}var h=a(13),v=a.n(h);function g(e){var t=e.comments.slice();t.sort(function(e,t){return t.comments-e.comments});var a=[];if(e.comments)for(var n=0;n<e.comments.length;n++)a.push(o.a.createElement(p,{replyHandler:e.replyHandler,userId:e.userId,commentTree:t[n]}));return o.a.createElement("div",{className:"comments-container"},a,0==a.length?"No comments!":null)}var f=a(9).default;function b(e){for(var t="",a=0;a<e.length;a++)t+=""+e.charCodeAt(a).toString(16);return t}var E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).toggleCommentsHandler=function(){a.setState({showComments:!a.state.showComments})},a.toggleTipHandler=function(){a.props.loggedIn?a.setState({tip:!a.state.tip}):a.props.replyHandler()},a.editPriceHandler=function(){a.setState({tip:!1,votePrice:a.state.priceInput})},a.priceInputChangeHandler=function(e){var t=e.target.value,n=!1;if(!isNaN(t)){if("0."==t||"0.0"==t)o=0;else var o=JSON.parse(e.target.value);o.countDecimals()<3&o>=.01&&(n=!0)}a.setState({priceInput:e.target.value,validPrice:n})},a.onPaymentHandler=function(){a.setState({votePrice:a.props.defaultVotePrice})},a.state={showComments:!1,tip:!1,votePrice:localStorage.getItem("votePrice"),priceInput:"",validPrice:""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this,a=decodeURI(this.props.postData.tx.out[0].s5),n=decodeURIComponent(this.props.postData.tx.out[0].s4),s=this.props.postData.tx.out[0].s6,r=this.props.showCommentsFor==this.props.postData.tx.tx.h,i=this.props.postData.tx.out[0].s7==this.props.userId,l=this.props.postData.voters.includes(this.props.userId),c=!i&&!l;e=this.props.postData.tx.timeago?this.props.postData.tx.timeago:function(e){var t=Date.now()-e;return t<6e4?Math.round(t/1e3)+" seconds ago":t<36e5?Math.round(t/6e4)+" minutes ago":t<864e5?Math.round(t/36e5)+" hours ago":t<2592e6?Math.round(t/864e5)+" days ago":t<31536e6?Math.round(t/2592e6)+" months ago":Math.round(t/31536e6)+" years ago"}(this.props.postData.tx.timestamp);var m,d=this.props.postData.voters.length+1,u=this.props.postData.reward,p=this.props.postData.initialVote,h=JSON.parse((u+p)/1e8)*this.props.bsvPrice,v=(Math.round(100*h)/100).toString(),E=o.a.createElement("div",{style:{height:50}}),w=this.props.windowWidth<480,y=this.props.loggedIn;if(!this.props.loggedIn||this.state.tip||w){if(this.props.loggedIn&&this.state.tip){var x,P=this.state.validPrice;x=P?"header-button":"header-button button-greyed",E=o.a.createElement("div",{class:"price-edit-form-block w-form"},o.a.createElement("form",{id:"email-form-4",name:"email-form-4","data-name":"Email Form 4",class:"form-3"},o.a.createElement("div",{class:"price-edit-container",style:{display:"flex",alignItems:"center"}},o.a.createElement("input",{type:"text",class:"text-field price-field w-input",onChange:this.priceInputChangeHandler,maxlength:"256",name:"name-2","data-name":"Name 2",placeholder:"Vote Price (USD)",id:"name-2"}),o.a.createElement("div",{class:x,onClick:P?this.editPriceHandler:function(){return null}},o.a.createElement("div",{class:"header-button-text dropdown-text",style:{whiteSpace:"nowrap",overflow:"none"}},"set price")))))}}else E=o.a.createElement("div",{style:{width:140}},o.a.createElement(f,{label:"vote",onPayment:this.onPaymentHandler,outputs:[{amount:0,currency:"BSV",type:"SCRIPT",script:"OP_RETURN "+b("13beK8bifnhuC8pawWvMrPCaWoTQi5LnZf")+" "+b("post/vote")+" "+b("vote")+" "+b(this.props.postData.tx.tx.h)+" "+b(this.props.userId)},{to:this.props.postData.tx.in[0].e.a,amount:this.state.votePrice,currency:"USD"}]}));1==v.length&&(v+=".00"),m=y&&!i?o.a.createElement("div",{className:"post-button",onClick:function(){return t.props.replyHandler(t.props.postData.tx.tx.h,s,t.props.postData.tx.in[0].e.a)}},o.a.createElement("div",{className:"metadata post-button-text"},"reply")):null;var C,N=o.a.createElement("div",{className:"post-button",onClick:this.toggleTipHandler},o.a.createElement("div",{className:"metadata post-button-text",onClick:this.toggleTipHandler},this.state.tip?"cancel":"edit price")),S=o.a.createElement("div",{className:"post-button",onClick:function(){return t.props.voteHandler(t.props.postData)}},o.a.createElement("div",{className:"metadata post-button-text"},"vote"));return C=w?S:N,o.a.createElement("div",{className:"post-container"},o.a.createElement("div",{className:"post"},o.a.createElement("div",{style:{width:"100%"}},o.a.createElement("div",{className:"post-data"},o.a.createElement("div",{className:"reward"},"$",v," ",o.a.createElement("strong",null)),o.a.createElement("div",{className:"post-title",style:{cursor:"pointer"},onClick:function(){return window.open(a)}},n)),o.a.createElement("div",{className:"post-metadata"},o.a.createElement("div",{className:"div-block-5"},o.a.createElement("div",{className:"metadata"}," (",d," vote",1==d?null:"s",")"),o.a.createElement("div",{className:"metadata"}," ",e),o.a.createElement("div",{className:"metadata"},s),o.a.createElement("div",{className:"metadata",style:{cursor:"pointer"},onClick:function(){return t.props.toggleComments(t.props.postData.tx)}}," ",r?"comments \u25bc":"comments \u25b6")),o.a.createElement("div",{className:"div-block-5"},m,!y||i||l?null:C))),c||this.state.tip?E:o.a.createElement("div",{className:"hide-mobile"},o.a.createElement("div",{className:"hide-mobile",style:{height:50,width:120,display:"flex",alignItems:"center",justifyContent:"center"}},l?"Voted! \ud83d\uddf3\ufe0f":null))),r?o.a.createElement(g,{replyHandler:this.props.replyHandler,userId:this.props.userId,comments:this.props.comments}):null)}}]),t}(o.a.Component),w=v()(E),y=(a(17),a(9).default);Number.prototype.countDecimals=function(){return Math.floor(this.valueOf())===this.valueOf()?0:this.toString().split(".")[1].length||0};var x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onPaymentHandler=function(e){""!=a.state.input&&(localStorage.setItem("userId",e.userId.toString(),{path:"/"}),localStorage.setItem("username",a.state.input,{path:"/"}),a.props.changingUsername||a.props.changingUsername||localStorage.setItem("votePrice",a.state.priceInput),a.props.loginHandler()),console.log(e.userId),console.log(e)},a.inputOnChangeHandler=function(e){a.setState({input:e.target.value})},a.priceInputChangeHandler=function(e){var t=e.target.value,n=!1;if(!isNaN(t)){if("0."==t||"0.0"==t)o=0;else var o=JSON.parse(e.target.value);o.countDecimals()<3&o>=.01&&(n=!0)}a.setState({priceInput:e.target.value,validPrice:n})},a.votePriceChangeHandler=function(){localStorage.setItem("votePrice",a.state.priceInput),a.props.votePriceChangeHandler()},a.state={input:"",priceInput:"",validPrice:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e;console.log(this.props.changingUsername);var t,a,n,s=!this.props.changingUsername&!this.props.changingVotePrice,r=this.props.changingUsername,i=this.props.changingVotePrice,l=i&&this.state.validPrice&&""!=this.state.priceInput;t=s?!(this.state.validPrice&&""!==this.state.input):!(r&&""!==this.state.input),e=r?"1":"0.01",a=s?230:r?140:150,console.log(a),n=s?"Login":r?"Change Username":"Change Vote Price";var c="login-info",m="*On bsvnews, you can upvote other users' content. Set the default amount of money you would like to give them for each upvote. You can change this later. Your default price must be $0.01 or higher.";(s||i)&&0==this.state.validPrice&""!=this.state.priceInput&&(c+=" login-info-red",m="*Please enter a valid vote price (ex. 0.25).");var d,u=o.a.createElement("div",{class:c},m),p=o.a.createElement("input",{type:"text",class:"login-username w-input",maxLength:"15",name:"name-2","data-name":"Name 2",placeholder:"Desired username",id:"name-2",onChange:this.inputOnChangeHandler});if(s)d=o.a.createElement("div",{className:"vote-price-container"},o.a.createElement("input",{type:"text",onChange:this.priceInputChangeHandler,class:"login-username w-input",maxlength:"5",name:"name-2","data-name":"Name 2",placeholder:"Default vote price (USD)",id:"name-2"}));else if(i){var h;h=this.state.validPrice?"header-button":"header-button button-greyed",d=o.a.createElement("div",{className:"vote-price-container"},o.a.createElement("input",{type:"text",onChange:this.priceInputChangeHandler,class:"login-username w-input vote-price",maxlength:"5",name:"name-2","data-name":"Name 2",placeholder:"Default vote price (USD)",id:"name-2"}),o.a.createElement("div",{className:h,onClick:l?this.votePriceChangeHandler:function(){return null}},o.a.createElement("div",{className:"header-button-text dropdown-text"},"set price")))}return o.a.createElement("div",{class:"login-container"},o.a.createElement("div",{class:"login-alert w-form",style:{height:a}},o.a.createElement("form",{id:"email-form-3",name:"email-form-3","data-name":"Email Form 3",class:"login-form"},o.a.createElement("div",{class:"x-container"},o.a.createElement("div",{className:"div-block-4"},o.a.createElement("div",{class:"login-title"},n)),o.a.createElement("div",{class:"login-cancel",onClick:this.props.xHandler},"X")),o.a.createElement("form",{id:"email-form-3",name:"email-form-3","data-name":"Email Form 3",class:"login-form"},o.a.createElement("div",{class:"inputs-container"},s||r?p:null,s||i?[d,u]:null)),s||this.props.changingUsername?o.a.createElement("div",{className:"mb-container"},o.a.createElement(y,{to:"1ir1uFc24GBdtQC3HiCUfykfMYZQb9GfE",label:"submit",amount:e,currency:"USD",onPayment:this.onPaymentHandler,disabled:t})):null)))}}]),t}(o.a.Component),P=a(9).default,C=function(e){for(var t="",a=0;a<e.length;a++)t+=""+e.charCodeAt(a).toString(16);return t},N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).inputChangeHandler=function(e){a.setState({reply:e.target.value})},a.state={reply:""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"new-reply-container"},o.a.createElement("div",{className:" w-form"},o.a.createElement("form",{id:"email-form-2",name:"email-form-2","data-name":"Email Form 2",className:"m-vote-price-form"},o.a.createElement("div",{className:"div-block"},o.a.createElement("div",{style:{display:"flex",alignItems:"center"}},"Replying to: ",this.props.replyingTo.username),o.a.createElement("div",{className:"login-cancel",onClick:this.props.hideReply},"X")),o.a.createElement("textarea",{onChange:this.inputChangeHandler,id:"field",name:"field",placeholder:"Example Text",maxLength:5e3,className:"textarea w-input",defaultValue:""}),o.a.createElement(P,{label:"post",outputs:[{amount:0,currency:"BSV",type:"SCRIPT",script:"OP_RETURN "+C("13beK8bifnhuC8pawWvMrPCaWoTQi5LnZf")+" "+C("comment")+" "+C(this.props.replyingTo.path)+" "+C(encodeURIComponent(this.state.reply))+" "+C(this.props.username)+" "+C(this.props.userId)},{to:this.props.replyingTo.address,amount:"0.01",currency:"USD"}],onPayment:this.props.hideReply}))))}}]),t}(o.a.Component),S=a(12),I=a(9).default;function k(e){for(var t="",a=0;a<e.length;a++)t+=""+e.charCodeAt(a).toString(16);return t}Number.prototype.countDecimals=function(){return Math.floor(this.valueOf())===this.valueOf()?0:this.toString().split(".")[1].length||0};var H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).urlChangeHandler=function(e){a.setState({url:e.target.value})},a.titleChangeHandler=function(e){a.setState({title:e.target.value})},a.postPriceChangeHandler=function(e){var t=!1;if(!isNaN(e.target.value)){var n=JSON.parse(e.target.value);n.countDecimals()<3&n>=.01&&(t=!0)}a.setState({postPrice:e.target.value,validPrice:t})},a.defaultPriceHandler=function(){document.getElementsByClassName("price-field")[0].value=localStorage.getItem("votePrice"),a.setState({validPrice:!0,postPrice:localStorage.getItem("votePrice")})},a.minPriceHandler=function(){document.getElementsByClassName("price-field")[0].value="0.01",a.setState({validPrice:!0,postPrice:"0.01"})},a.state={url:"",title:"",opReturn:"",postPrice:"",validPrice:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=k("13beK8bifnhuC8pawWvMrPCaWoTQi5LnZf")+" "+k("post/vote")+" "+k("post")+" "+k(encodeURIComponent(this.state.title))+" "+k(encodeURI(this.state.url))+" "+k(this.props.username)+" "+k(this.props.userId),t=null;return this.state.validPrice&&(t=this.state.postPrice),o.a.createElement("div",{className:"new-post w-form"},o.a.createElement("form",{id:"email-form",name:"email-form","data-name":"Email Form",className:"form"},o.a.createElement("input",{onChange:this.titleChangeHandler,type:"text",className:"text-field w-input",maxLength:256,name:"name","data-name":"Name",placeholder:"Post Title",id:"name"}),o.a.createElement("input",{onChange:this.urlChangeHandler,type:"email",className:"text-field w-input",maxLength:256,name:"email","data-name":"Email",placeholder:"Post URL",id:"email",required:!0}),o.a.createElement("div",{class:"post-price-container"},o.a.createElement("input",Object(S.a)({type:"text",id:"postPriceInput",pattern:"\\d*",inputMode:"decimal",onChange:this.postPriceChangeHandler,class:"text-field price-field w-input",maxlength:"256",name:"name-2","data-name":"Name 2",placeholder:"Vote Price (USD)"},"id","name-2")),o.a.createElement("div",{class:"header-button",onClick:this.defaultPriceHandler},o.a.createElement("div",{class:"header-button-text dropdown-text"},"default price")),o.a.createElement("div",{class:"header-button",onClick:this.minPriceHandler},o.a.createElement("div",{class:"header-button-text dropdown-text"},"$0.01"))),o.a.createElement("div",{className:"text-block-7"},"*Enter in the price of your initial vote on your own post. You can think of it as paying for a form of advertisement as your post may get noticed more. Must be more than $0.01."),o.a.createElement(I,{outputs:[{amount:0,currency:"BSV",type:"SCRIPT",script:"OP_RETURN "+e},{to:"1ir1uFc24GBdtQC3HiCUfykfMYZQb9GfE",amount:t,currency:"USD"}],label:"submit",disabled:!this.state.validPrice,onPayment:this.props.finishSubmitHandler})))}}]),t}(o.a.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.windowWidth<480,a=navigator.userAgent.includes("iPhone");return t&a?o.a.createElement("div",{class:"m-n-segmented-controller-container"},o.a.createElement("div",{class:"m-n-segmented-controller"},o.a.createElement("div",{class:"m-n-tab-button",onClick:function(){e.props.switchMode("top")}},o.a.createElement("div",{class:"m-n-tab-button-text"},"Top")),o.a.createElement("div",{class:"m-n-tab-button",onClick:function(){return e.props.switchMode("new")}},o.a.createElement("div",{class:"m-n-tab-button-text"},"New")),o.a.createElement("div",{class:"m-n-tab-button",onClick:function(){return e.props.switchMode("weekly")}},o.a.createElement("div",{class:"m-n-tab-button-text"},"Weekly")))):t&!a?o.a.createElement("div",{class:"m-n-segmented-controller-container"},o.a.createElement("div",{class:"m-n-segmented-controller"},o.a.createElement("div",{class:this.props.top?"m-n-tab-button m-n-tab-button-selected":"m-n-tab-button",onClick:function(){e.props.switchMode("top")}},o.a.createElement("div",{class:"m-n-tab-button-text"},"Top")),o.a.createElement("div",{class:this.props.newMode?"m-n-tab-button m-n-tab-button-selected":"m-n-tab-button",onClick:function(){return e.props.switchMode("new")}},o.a.createElement("div",{class:"m-n-tab-button-text"},"New")),o.a.createElement("div",{class:this.props.weekly?"m-n-tab-button m-n-tab-button-selected":"m-n-tab-button",onClick:function(){return e.props.switchMode("weekly")}},o.a.createElement("div",{class:"m-n-tab-button-text"},"Weekly")))):null}}]),t}(o.a.Component),D=v()(O),j=a(19),T=a(9).default;function M(e){for(var t="",a=0;a<e.length;a++)t+=""+e.charCodeAt(a).toString(16);return t}var U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).changePrice=function(e){document.getElementById("name-2").value=e,a.setState({votePrice:e})},a.priceInputChangeHandler=function(e){var t=e.target.value,n=!1;if(!isNaN(t)){if("0."==t||"0.0"==t)o=0;else var o=JSON.parse(e.target.value);o.countDecimals()<3&o>=.01&&(n=!0)}a.setState({priceInput:e.target.value,validPrice:n})},a.state={votePrice:a.props.votePrice,priceInput:a.props.votePrice,validPrice:!0},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props.votingOn.tx.h,n=this.props.votingOn.in[0].e.a,s=this.state.validPrice;return e=s?"header-button":"header-button button-greyed",o.a.createElement("div",{class:"new-reply-container m-vote-container",style:{bottom:75}},o.a.createElement("div",{class:"m-vote-price-form-block w-form"},o.a.createElement("form",{id:"email-form-2",name:"email-form-2","data-name":"Email Form 2",class:"m-vote-price-form"},o.a.createElement("div",null,o.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},o.a.createElement("div",{class:"post-price-container",style:{paddingTop:10}},o.a.createElement("div",{class:"header-button",onClick:function(){return t.changePrice("1")}},o.a.createElement("div",{class:"header-button-text dropdown-text"},"$1")),o.a.createElement("div",{class:"header-button",onClick:function(){return t.changePrice("0.5")}},o.a.createElement("div",{class:"header-button-text dropdown-text"},"$0.50")),o.a.createElement("div",{class:"header-button",onClick:function(){return t.changePrice("0.05")}},o.a.createElement("div",{class:"header-button-text dropdown-text"},"$0.05")),o.a.createElement("div",{class:"header-button",onClick:function(){return t.changePrice("0.01")}},o.a.createElement("div",{class:"header-button-text dropdown-text"},"$0.01"))),o.a.createElement("div",{class:"login-cancel",onClick:this.props.xHandler},"X")),o.a.createElement("div",{class:"post-price-container",style:{paddingTop:10}},o.a.createElement("input",{onChange:this.priceInputChangeHandler,type:"text",pattern:"\\d*",inputMode:"decimal",class:"text-field price-field w-input",maxlength:"256",defaultValue:this.state.votePrice,name:"name-2","data-name":"Name 2",placeholder:"Vote Price (USD)",id:"name-2"}),o.a.createElement("div",{class:e,onClick:s?function(){return t.changePrice(t.state.priceInput)}:function(){return null}},o.a.createElement("div",{class:"header-button-text dropdown-text"},"set price"))),o.a.createElement("div",{style:{paddingTop:10}},o.a.createElement(T,{label:"vote",onPayment:this.props.xHandler,outputs:[{amount:0,currency:"BSV",type:"SCRIPT",script:"OP_RETURN "+M("13beK8bifnhuC8pawWvMrPCaWoTQi5LnZf")+" "+M("post/vote")+" "+M("vote")+" "+M(a)+" "+M(this.props.userId)},{to:n,amount:this.state.votePrice,currency:"USD"}]}))))))}}]),t}(o.a.Component);a(9).default;function V(e,t){for(var a,n=Math.ceil(e.length/t),o=new Array(n),s=0;s<n;s++)a=s*t,o[s]=e.substring(a,a+t);return o}var R=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).processPostsVotes=function(e){for(var t={},n=[],o=[],s=(e=e.filter(function(e){var a,s=!1;if(e.out[0].s3)if("price"==e.out[0].s2&&e.out[0].s4&&o.push(JSON.parse(e.out[0].s4)),"post"==e.out[0].s3){if(s=e.out[0].s7&&(a=decodeURI(e.out[0].s5),!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(a)||decodeURI(e.out[0].s5).includes("medium"))){var r=!1;e.out[2]&&(r="1JM394PQB47chcs49PCe3JETLDaBwzieBP"==e.out[2].e.a);var i,l="1JM394PQB47chcs49PCe3JETLDaBwzieBP"==e.out[1].e.a|r,c=!1,m=null;(i="1ir1uFc24GBdtQC3HiCUfykfMYZQb9GfE"==e.out[1].e.a)&&(m=e.out[1].e.v),e.out[2]&&(c="1ir1uFc24GBdtQC3HiCUfykfMYZQb9GfE"==e.out[2].e.a)&&(m=e.out[2].e.v);var d=i||c;l?t[e.tx.h]={tx:e,reward:0,initialVote:0,voters:[]}:d&&(t[e.tx.h]={tx:e,reward:0,initialVote:m,voters:[]})}}else"vote"==e.out[0].s3&&(s=e.out[0].s5)&&n.push(e);return s}),o[0]),r=0;r<n.length;r++){var i=n[r].out[0].s4;if(t[i]){var l=t[i].tx.in[0].e.a==n[r].out[1].e.a,c=!1;n[r].out[2]&&(c=t[i].tx.in[0].e.a==n[r].out[2].e.a),l=l||c;var m=n[r].out[0].s5,d=t[i].voters,u=m==t[i].tx.out[0].s7;!l||d.includes(m)||u||(t[i].reward+=c?n[r].out[2].e.v:n[r].out[1].e.v,d.push(m))}}for(var p=Object.values(t),h=p.slice().sort(function(e,t){return e.reward==t.reward?e.tx.timestamp-t.tx.timestamp:t.voters.length-e.voters.length}),v=h.filter(function(e){return e.tx.timestamp>Date.now()-864e5});v.length>10;)v.pop();for(;h.length>15;)h.pop();var g=p.filter(function(e){return e.tx.timestamp>Date.now()-864e5});a.setState({weeklyPosts:h,topPosts:v,newPosts:g,bsvPrice:s})},a.loadPosts=function(){var e=btoa(JSON.stringify({v:3,q:{find:{"out.s1":"13beK8bifnhuC8pawWvMrPCaWoTQi5LnZf"},limit:1e3}}));fetch("https://weekly.bitdb.network/q/12KQyEvGbHcJmavgmB1jDeTSJhJTzQ5ePg/"+e,{headers:{key:"1EsRL44h3xNm8G4hT35ns3nNPicAHWAftc"}}).then(function(e){return e.json()}).then(function(e){var t=JSON.stringify(e,null,2),n=(t=JSON.parse(t)).t;a.processPostsVotes(n),a.setState({transactions:n})})},a.createPostVoteSocket=function(){var e=btoa(JSON.stringify({v:3,q:{find:{"out.s1":"13beK8bifnhuC8pawWvMrPCaWoTQi5LnZf","out.s2":"post/vote"}}}));new EventSource("https://chronos.bitdb.network/s/1P6o45vqLdo6X8HRCZk8XuDsniURmXqiXo/"+e).onmessage=function(e){var t=JSON.parse(JSON.stringify(JSON.parse(e.data),null,2)).data;t.length>0&&console.log(t);for(var n=a.state.transactions.slice(),o=0;o<t.length;o++)n.unshift(t[o]);a.processPostsVotes(n),a.setState({transactions:n})}},a.hideLoginAlert=function(){a.setState({showLoginAlert:!1})},a.submitHandler=function(){a.state.loggedIn?1==a.state.posting?a.setState({posting:!1}):a.setState({replying:!1,posting:!0,mode:"new"}):a.setState({showLoginAlert:!0})},a.switchMode=function(e){"top"==e?a.setState({mode:"top"}):"new"==e?a.setState({mode:"new"}):a.setState({mode:"weekly"})},a.loginHandler=function(){a.setState({loggedIn:!0,userId:localStorage.getItem("userId"),username:localStorage.getItem("username"),votePrice:localStorage.getItem("votePrice")}),a.hideLoginAlert()},a.replyHandler=function(e,t,n){a.state.loggedIn?a.setState({replying:!0,replyingTo:{path:e,username:t,address:n}}):a.setState({showLoginAlert:!0})},a.hideReplyFormHandler=function(){a.setState({replying:!1,replyingTo:null})},a.toggleCommentsHandler=function(e){a.state.showCommentsFor==e.tx.h?a.setState({showCommentsFor:null}):a.loadComments(e)},a.processComments=function(e,t){e=e.filter(function(e){var t=!1;return e.out[0].s6&&(t=!0),t});for(var n={},o=0,s=t.tx.h,r=t.in[0].e.a,i=0;i<e.length;i++){var l=r==e[i].out[1].e.a||r==e[i].out[2].e.a,c=e[i].out[0].s6==t.out[0].s7;e[i].out[0].s3.length/64>o&&(o=e[i].out[0].s3.length/64),e[i].out[0].s3==t.tx.h&&l&&!c&&(n[e[i].tx.h]={tx:e[i],comments:0})}if(o>1)for(var m=0;m<e.length;m++){if(128==e[m].out[0].s3.length)if(n[(h=V(e[m].out[0].s3,64))[1]]){l=(r=n[h[1]].tx.in[0].e.a)==e[m].out[1].e.a||r==e[m].out[2].e.a,c=n[h[1]].tx.out[0].s6==e[m].out[0].s6;l&&!c&&(n[h[1]][e[m].tx.h]={tx:e[m],comments:0},n[h[1]].comments+=1)}}if(o>2)for(var d=0;d<e.length;d++){if(192==e[d].out[0].s3.length)if(n[(h=V(e[d].out[0].s3,64))[1]]&&n[h[1]][h[2]]){l=(r=n[h[1]][h[2]].tx.in[0].e.a)==e[d].out[1].e.a||r==e[d].out[2].e.a,c=n[h[1]][h[2]].tx.out[0].s6==e[d].out[0].s6;l&&!c&&(n[h[1]][h[2]][e[d].tx.h]={tx:e[d],comments:0},n[h[1]][h[2]].comments+=1)}}if(o>3)for(var u=0;u<e.length;u++){if(256==e[u].out[0].s3.length)if(n[(h=V(e[u].out[0].s3,64))[1]]&&n[h[1]][h[2]]&&n[h[1]][h[2]][h[3]]){l=(r=n[h[1]][h[2]][h[3]].tx.in[0].e.a)==e[u].out[1].e.a||r==e[u].out[2].e.a,c=n[h[1]][h[2]][h[3]].tx.out[0].s6==e[u].out[0].s6;l&&!c&&(n[h[1]][h[2]][h[3]][e[u].tx.h]={tx:e[u],comments:0},n[h[1]][h[2]][h[3]].comments+=1)}}if(o>4)for(var p=0;p<e.length;p++){var h;if(320==e[p].out[0].s3.length)if(n[(h=V(e[p].out[0].s3,64))[1]]&&n[h[1]][h[2]]&&n[h[1]][h[2]][h[3]]&&n[h[1]][h[2]][h[3]][h[4]]){l=(r=n[h[1]][h[2]][h[3]][h[4]].tx.in[0].e.a)==e[p].out[1].e.a||r==e[p].out[2].e.a,c=n[h[1]][h[2]][h[3]][h[4]].tx.out[0].s6==e[p].out[0].s6;l&&!c&&(n[h[1]][h[2]][h[3]][h[4]][e[p].tx.h]={tx:e[p],comments:0},n[h[1]][h[2]][h[3]][h[4]].comments+=1)}}a.setState({comments:Object.values(n),showCommentsFor:s})},a.loadComments=function(e){var t={v:3,q:{find:{"out.s1":"13beK8bifnhuC8pawWvMrPCaWoTQi5LnZf","out.s2":"comment","out.s3":{$regex:".*"+e.tx.h+".*"}}}},n=btoa(JSON.stringify(t));fetch("https://weekly.bitdb.network/q/12KQyEvGbHcJmavgmB1jDeTSJhJTzQ5ePg/"+n,{headers:{key:"1EsRL44h3xNm8G4hT35ns3nNPicAHWAftc"}}).then(function(e){return e.json()}).then(function(t){var n=JSON.stringify(t,null,2),o=(n=JSON.parse(n)).t;a.processComments(o,e),a.setState({commentsTransactions:o})})},a.createCommentsSocket=function(e){var t={v:3,q:{find:{"out.s1":"13beK8bifnhuC8pawWvMrPCaWoTQi5LnZf","out.s2":"comment","out.s3":{$regex:".*"+e.tx.h+".*"}}}},n="https://chronos.bitdb.network/s/1P6o45vqLdo6X8HRCZk8XuDsniURmXqiXo/"+btoa(JSON.stringify(t));a.commentsSocket=new EventSource(n),a.commentsSocket.onmessage=function(t){var n=JSON.parse(JSON.stringify(JSON.parse(t.data),null,2)).data,o=a.state.commentsTransactions.concat(n);a.state.showCommentsFor==e.tx.h&&(a.processComments(o,e),a.setState({commentsTransactions:o}))}},a.votePriceChangeHandler=function(){a.state.votePrice=localStorage.getItem("votePrice"),a.setState({showLoginAlert:!1,changingVotePrice:!1})},a.mobileVoteHandler=function(e){a.setState({showVoteDialogue:!0,showDropdown:!1,replying:!1,votingOn:e.tx})},a.hideUIElements=function(){a.setState({showVoteDialogue:!1,votingOn:null})};var n=localStorage.getItem("username"),o=localStorage.getItem("userId"),s=localStorage.getItem("votePrice"),r={showLoginAlert:!1,showDropdown:!1,showCommentsFor:null,showVoteDialogue:!1,votingOn:null,changingUsername:!1,changingVotePrice:!1,defaultVotePrice:null,loggedIn:!1,replying:!1,replyingTo:null,posting:!1,commentsTransactions:null,comments:null,mode:"top",userId:null,username:null,transactions:[],topPosts:[],newPosts:[],weeklyPosts:[],bsvPrice:null};return n&&o&&s&&(r.username=n,r.userId=o,r.votePrice=s,r.loggedIn=!0),a.state=r,a.loadPosts(),a.createPostVoteSocket(),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=[],a=[],n="top"==this.state.mode,s="new"==this.state.mode,r="weekly"==this.state.mode,i=!r,l=this.state.showVoteDialogue;this.state.bsvPrice;a=n?this.state.topPosts:s?this.state.newPosts:this.state.weeklyPosts;for(var c=0;c<a.length;c++)t.push(o.a.createElement(w,{bsvPrice:this.state.bsvPrice,key:a[c].tx.tx.h,voteHandler:this.mobileVoteHandler,defaultVotePrice:this.state.votePrice,loggedIn:this.state.loggedIn,postData:a[c],comments:this.state.comments,showCommentsFor:this.state.showCommentsFor,toggleComments:this.toggleCommentsHandler,replyHandler:this.replyHandler,userId:this.state.userId}));var m,d=o.a.createElement("div",{className:"dropdown-container"},o.a.createElement("div",{class:"dropdown"},o.a.createElement("div",{class:"header-button",onClick:function(){return e.setState({showLoginAlert:!0,changingUsername:!0,changingVotePrice:!1,showDropdown:!1})}},o.a.createElement("div",{class:"header-button-text dropdown-text"},"change username")),o.a.createElement("div",{class:"header-button dropdown-button"},o.a.createElement("div",{class:"header-button-text dropdown-text",onClick:function(){return e.setState({showLoginAlert:!0,changingUsername:!1,showDropdown:!1,changingVotePrice:!0})}},"change vote price",o.a.createElement("br",null)))));return m=this.state.loggedIn?o.a.createElement("div",{className:"header-right"},o.a.createElement("div",{class:"header-button header-button-right m-header-button",onClick:this.submitHandler},o.a.createElement("img",{src:this.state.posting?"https://uploads-ssl.webflow.com/5cb9fe80c114993f85aebed2/5d028a3d1a6395bd081e5a2a_submit%20cance.png":"https://uploads-ssl.webflow.com/5cb9fe80c114993f85aebed2/5cfd835e1c26ab620b063cea_bsvnews%20plus%20icon.png",width:"14",height:"14",alt:"",class:"image-2"})),o.a.createElement("div",{class:"header-button header-button-right m-header-button",onClick:this.loadPosts},o.a.createElement("img",{src:"https://uploads-ssl.webflow.com/5cb9fe80c114993f85aebed2/5cfd8266982a747870f23408_bsvnews%20refresh.png",width:"14",height:"14",alt:"",class:"image"})),o.a.createElement("div",{className:"header-button header-button-right",onClick:function(){return e.setState({showDropdown:!e.state.showDropdown})}},o.a.createElement("div",{className:"header-button-text"},this.state.username),o.a.createElement("div",{className:"header-button-text button-symbol"},this.state.showDropdown?"\u25bc":"\u25b6"))):o.a.createElement("div",{className:"header-right"},o.a.createElement("div",{className:"header-button header-button-right",onClick:function(){return e.setState({showLoginAlert:!0})}},o.a.createElement("div",{className:"header-button-text"},"login"))),o.a.createElement("div",null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"bsvnews"),o.a.createElement("meta",{content:"width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0",name:"viewport"}),o.a.createElement("meta",{content:"Webflow",name:"generator"}),o.a.createElement(j.Helmet,null,o.a.createElement("title",null,"bsvnews"),o.a.createElement("script",{src:"https://tonicpow.com/tonic.js"}),o.a.createElement("script",{src:"https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js",type:"text/javascript"}),o.a.createElement("script",{src:"https://bico.media/65a47b6916ef22945ac1f7637721de0e2187e1abaa81016a7c6d878c50426b62",type:"text/javascript"}),o.a.createElement("script",{src:"https://bico.media/b7d90d9da89fabfe9000ece46b453bfabce9a733e1bb97b60445b01443d1a117",type:"text/javascript"})),o.a.createElement("div",{className:"container w-container",style:{paddingBottom:10}},o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"header-left"},o.a.createElement("div",{className:"title"},"BSV News"),o.a.createElement("div",{className:"button-container"},i?o.a.createElement("div",{className:"header-button",onClick:n?function(){return e.switchMode("new")}:function(){return e.switchMode("top")}}," ",o.a.createElement("div",{className:"header-button-text"},"top"==this.state.mode?"new":"top"," ")," "):null,o.a.createElement("div",{className:"header-button",onClick:this.submitHandler}," ",o.a.createElement("div",{className:"header-button-text"},this.state.posting?" X ":"submit")),o.a.createElement("div",{className:"header-button",onClick:this.loadPosts}," ",o.a.createElement("div",{className:"header-button-text"},"reload")),o.a.createElement("div",{className:"header-button",onClick:r?function(){return e.switchMode("top")}:function(){return e.switchMode("weekly")}}," ",o.a.createElement("div",{className:"header-button-text"},"weekly"==this.state.mode?"today":"weekly")))),m),this.state.showDropdown?d:null,this.state.showLoginAlert?o.a.createElement(x,{votePriceChangeHandler:this.votePriceChangeHandler,xHandler:this.hideLoginAlert,loginHandler:this.loginHandler,changingUsername:this.state.changingUsername,changingVotePrice:this.state.changingVotePrice}):null,this.state.posting?o.a.createElement(H,{username:this.state.username,userId:this.state.userId,finishSubmitHandler:this.submitHandler}):null,o.a.createElement("div",{className:"posts"},t),o.a.createElement("div",{className:"metadata",style:{width:"100%",padding:10,paddingBottom:0,paddingRight:20,display:"flex",justifyContent:"flex-end"}}," disable scale  Created by $canyouhandleme")),o.a.createElement("div",{className:"tonic-pow"},o.a.createElement("div",{style:{margin:"auto"},class:"tonic","data-address":"1BvrRxhXAVsZKyMnBT1STkXXVnsXrm7BNm"})),this.state.replying?o.a.createElement(N,{hideReply:this.hideReplyFormHandler,replyingTo:this.state.replyingTo,username:this.state.username,userId:this.state.userId}):null,l?o.a.createElement(U,{xHandler:this.hideUIElements,votePrice:this.state.votePrice,votingOn:this.state.votingOn,userId:this.state.userId}):null,o.a.createElement(D,{switchMode:this.switchMode,top:n,newMode:s,weekly:r}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.23d05b44.chunk.js.map