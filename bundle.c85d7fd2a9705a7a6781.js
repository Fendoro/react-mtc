webpackJsonp([1],{225:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(171),a=function(i){return i&&i.__esModule?i:{default:i}}(n),o=(0,a.default)();t.default=o},236:function(i,t,e){"use strict";function n(i){return i&&i.__esModule?i:{default:i}}var a=e(0),o=n(a),r=e(19),l=n(r),u=e(54),d=e(351),m=n(d),c=e(225),s=n(c);e(493),l.default.render(o.default.createElement(u.Router,{history:s.default},o.default.createElement(m.default,null)),document.getElementById("root"))},351:function(i,t,e){"use strict";function n(i){return i&&i.__esModule?i:{default:i}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(i){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n])}return i},o=e(0),r=n(o),l=e(54),u=e(352),d=n(u),m=e(492),c=n(m),s=function(){return r.default.createElement("div",{id:"app"},r.default.createElement(l.Route,{exact:!0,path:"/",render:function(i){return r.default.createElement(d.default,a({items:c.default},i))}}),r.default.createElement(l.Route,{path:"/:id",render:function(i){return r.default.createElement(d.default,a({items:c.default},i))}}))};t.default=s},352:function(i,t,e){"use strict";function n(i){return i&&i.__esModule?i:{default:i}}function a(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function o(i,t){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?i:t}function r(i,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(i,t):i.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function i(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),u=Object.assign||function(i){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n])}return i},d=e(0),m=n(d),c=e(1),s=n(c),p=e(104),f=e(54),q=e(133),b=e(491),v=n(b),E=function(i,t){return function(e){return m.default.createElement(v.default,u({items:i,menuId:t},e))}},L=function(i){function t(i){a(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,i));return e.selectMenu=function(i){e.setState({active:i})},e.state={active:e.getDefaultKey()},e}return r(t,i),l(t,[{key:"componentWillReceiveProps",value:function(i){var t=i.match.params.id;null!=t&&this.state.active!==t&&this.setState({active:parseInt(t,10)})}},{key:"getDefaultKey",value:function(){var i=this.props,t=i.match.params.id,e=i.items;return null!=t?parseInt(t,10):e[0].id}},{key:"renderMenu",value:function(){return this.props.items.map(function(i){var t=i.id,e=i.title;return m.default.createElement(q.LinkContainer,{key:t,to:"/"+t,eventKey:t},m.default.createElement(p.NavItem,null,e))})}},{key:"renderContent",value:function(){var i=this.props,t=i.match.url;return i.items.map(function(i){var e=i.id,n=i.tabs;return m.default.createElement(p.Tab.Pane,{key:e,eventKey:e},m.default.createElement(f.Route,{exact:!0,path:t+"/",render:E(n,e)}),m.default.createElement(f.Route,{path:t+"/:id",render:E(n,e)}))})}},{key:"render",value:function(){return m.default.createElement(p.Tab.Container,{id:"left-tabs",activeKey:this.state.active,onSelect:this.selectMenu},m.default.createElement(p.Row,{className:"clearfix"},m.default.createElement(p.Col,{sm:4},m.default.createElement(p.Nav,{bsStyle:"pills",stacked:!0},this.renderMenu())),m.default.createElement(p.Col,{sm:8},m.default.createElement(p.Tab.Content,{animation:!0},this.renderContent()))))}}]),t}(d.Component);L.propTypes={match:s.default.shape({params:s.default.shape({id:s.default.string}),url:s.default.string}),items:s.default.arrayOf(s.default.object).isRequired},L.defaultProps={match:{params:{}}},t.default=L},491:function(i,t,e){"use strict";function n(i){return i&&i.__esModule?i:{default:i}}function a(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function o(i,t){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?i:t}function r(i,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(i,t):i.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function i(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),u=e(0),d=n(u),m=e(1),c=n(m),s=e(104),p=e(133),f=e(225),q=n(f),b=function(i){function t(i){a(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,i));return e.selectContent=function(i){var t=e.state.expanded,n=t;n=t.indexOf(i)>-1?t.filter(function(t){return t!==i}):t.concat([i]),q.default.push(e.props.location.pathname+"?"+n.join(",")),e.setState({expanded:n})},e.selectTab=function(i){e.setState({active:i})},e.state={active:e.getDefaultKey(),expanded:e.getExpanded(i)},e}return r(t,i),l(t,[{key:"componentWillReceiveProps",value:function(i){var t=i.match.params.id,e=this.state.active;null!=t&&e!==t&&(e=parseInt(t,10),this.setState({active:e}));var n=this.getExpanded(i);this.state.expanded!==n&&this.setState({expanded:n})}},{key:"getDefaultKey",value:function(){var i=this.props,t=i.match.params.id,e=i.items;return null!=t?parseInt(t,10):e[0].id}},{key:"getExpanded",value:function(i){var t=i.location.search,e=t?t.substr(1).split(",").map(function(i){return parseInt(i,10)}):[];return e instanceof Array&&0!==e.length||(e=this.props.items.map(function(i){return i.id})),e}},{key:"renderTabs",value:function(){var i=this.props,t=i.items,e=i.menuId;return t.map(function(i){var t=i.id,n=i.title;return d.default.createElement(p.LinkContainer,{key:t,to:"/"+e+"/"+t,eventKey:t},d.default.createElement(s.NavItem,null,n))})}},{key:"renderTabContent",value:function(){var i=this;return this.props.items.map(function(t){var e=t.id,n=t.content;return d.default.createElement(s.Tab.Pane,{key:e,eventKey:e},i.renderContent(n))})}},{key:"renderContent",value:function(i){var t=this;return i.map(function(i){var e=i.id,n=i.title,a=i.text;return d.default.createElement(s.Panel,{key:e,collapsible:!0,expanded:t.state.expanded.indexOf(e)>-1,header:n,onSelect:function(){t.selectContent(e)}},a)})}},{key:"render",value:function(){return d.default.createElement(s.Tab.Container,{id:"tab-"+this.props.menuId,activeKey:this.state.active,onSelect:this.selectTab},d.default.createElement(s.Row,{className:"clearfix"},d.default.createElement(s.Col,{sm:12},d.default.createElement(s.Nav,{bsStyle:"tabs"},this.renderTabs())),d.default.createElement(s.Col,{sm:12},d.default.createElement(s.Tab.Content,{animation:!0},this.renderTabContent()))))}}]),t}(u.Component);b.propTypes={match:c.default.shape({params:c.default.shape({id:c.default.string}),url:c.default.string}),location:c.default.shape({pathname:c.default.string}),menuId:c.default.number.isRequired,items:c.default.arrayOf(c.default.object).isRequired},b.defaultProps={match:{params:{}},location:{pathname:""}},t.default=b},492:function(i,t){i.exports=[{id:1,title:"Menu 1",tabs:[{id:1,title:"Tab 1",content:[{id:1,title:"1-1-1",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."},{id:2,title:"1-1-2",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."},{id:3,title:"1-1-3",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."}]},{id:2,title:"Tab 2",content:[{id:1,title:"1-2-1",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."},{id:2,title:"1-2-2",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."},{id:3,title:"1-2-3",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."}]},{id:3,title:"Tab 3",content:[{id:1,title:"1-3-1",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."},{id:2,title:"1-3-2",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."},{id:3,title:"1-3-3",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."}]}]},{id:2,title:"Menu 2",tabs:[{id:1,title:"Tab 1",content:[{id:1,title:"2-1-1",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."},{id:2,title:"2-1-2",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."},{id:3,title:"2-1-3",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."}]},{id:2,title:"Tab 2",content:[{id:1,title:"2-2-1",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."},{id:2,title:"2-2-2",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."},{id:3,title:"2-2-3",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."}]},{id:3,title:"Tab 3",content:[{id:1,title:"2-3-1",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."},{id:2,title:"2-3-2",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."},{id:3,title:"2-3-3",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."}]}]},{id:3,title:"Menu 3",tabs:[{id:1,title:"Tab 1",content:[{id:1,title:"3-1-1",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."},{id:2,title:"3-1-2",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."},{id:3,title:"3-1-3",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."}]},{id:2,title:"Tab 2",content:[{id:1,title:"3-2-1",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."},{id:2,title:"3-2-2",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."},{id:3,title:"3-2-3",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."}]},{id:3,title:"Tab 3",content:[{id:1,title:"3-3-1",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."},{id:2,title:"3-3-2",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."},{id:3,title:"3-3-3",text:"Anim laboris Lorem minim mollit irure cillum sint dolore labore qui ea enim Lorem pariatur. Consequat dolore aliqua laborum occaecat anim cupidatat Lorem enim esse irure dolore. Et nisi dolore nisi incididunt nulla. Proident pariatur pariatur mollit officia dolor ut elit voluptate sunt est culpa in in nisi. Et dolor incididunt fugiat irure incididunt enim. Proident dolore consequat consequat aliquip pariatur in in amet nulla non minim ullamco in voluptate."}]}]}]},493:function(i,t){}},[236]);