(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),i=a.n(r),c=(a(13),a(7)),s=a(1),l=a(2),d=a(4),m=a(3),u=function(e){var t=e.todos,a=e.deleteTodo,n=e.finish,r=t.length?t.map((function(e){return o.a.createElement("div",{className:"collection-item center-align animate__animated animate__bounceIn",key:e.id,id:e.id},o.a.createElement("i",{onClick:function(){n(e.id)},className:"right material-icons"},"check"),o.a.createElement("i",{className:"left material-icons",onClick:function(){a(e.id)}},"close"),o.a.createElement("span",null,e.content)," ")})):o.a.createElement("p",{className:"noThings"},"No things left...");return o.a.createElement("div",{className:"todos collection"},r)},h=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={content:""},e.handleChange=function(t){e.setState({content:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state),e.setState({content:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:this.props.darkMode?"inputDivDark":"inputDiv"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{autoFocus:!0,placeholder:"Add a thing",onChange:this.handleChange,value:this.state.content})))}}]),a}(o.a.Component),f=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(e){return o.a.createElement("div",{className:this.props.darkMode?"DarkFooter":"Footer"},o.a.createElement("button",{onClick:this.props.deleteAll,className:"waves-effect waves-red btn-small clearBtn"},o.a.createElement("i",{className:"material-icons left"},"delete_sweep"),"Clear all"),o.a.createElement("button",{onClick:this.props.toggle,className:"btn-small darkBtn"},o.a.createElement("i",{className:"material-icons right"},"brightness_6"),"Dark Mode"))}}]),a}(o.a.Component),p=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[{id:1,content:"add some things"}],darkMode:!1,completed:!0},e.deleteTodo=function(t){var a=e.state.todos.filter((function(e){return e.id!==t}));e.setState({todos:a})},e.addTodo=function(t){if(""!==t.content){t.id=Math.random();var a=[].concat(Object(c.a)(e.state.todos),[t]);e.setState({todos:a})}},e.finish=function(e){var t=document.getElementById(e);""===t.style.background?t.setAttribute("style","background: linear-gradient(90deg, rgba(0,200,219,1) 0%, rgba(0,255,158,1) 100%"):t.setAttribute("style",'background: ""')},e.deleteAll=function(t){t.preventDefault(),e.setState({todos:[]})},e.toggleDark=function(){e.setState({darkMode:!e.state.darkMode})},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"todo-app"},o.a.createElement("h1",{className:this.state.darkMode?"dark center animate__animated animate__tada":"center animate__animated animate__tada"},"Things."),o.a.createElement(h,{addTodo:this.addTodo,darkMode:this.state.darkMode}),o.a.createElement(u,{todos:this.state.todos,deleteTodo:this.deleteTodo,finish:this.finish}),o.a.createElement(f,{deleteAll:this.deleteAll,toggle:this.toggleDark,darkMode:this.state.darkMode}),o.a.createElement("div",{className:this.state.darkMode?"darkMode":null}))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.83dbc530.chunk.js.map