var ob=React.createElement('div',{id:'parent'},
[React.createElement('div',{id:"child1"},
[
    React.createElement('h1',{},"i am child1's h1"),
    React.createElement('h2',{},"i am child1's h2") 
]
),
React.createElement('div',{id:"child2"},
[
    React.createElement('h1',{},"i am child1's h1"),
    React.createElement('h2',{},"i am child1's h2") 
]
)]
);
var root=ReactDOM.createRoot(document.getElementById('greet'));
root.render(ob);
// var nw=React.createElement('h1',{},"hello");
// var rt=ReactDOM.createRoot(document.getElementById('parent'));
// rt.render(nw);
// var ob=React.createElement('h1',{id:"hd"},"hello world");
// var root=ReactDOM.createRoot(document.getElementById('greet'));
// root.render(ob);
// console.log(document.getElementById('greet'));
// console.log(document.createElement('div'))
// var nw=React.createElement('div',{id:"o"},"");
// root.render(nw);
// var rt=ReactDOM.createRoot(document.getElementById("o"));
// rt.render(ob);