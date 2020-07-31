(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),b=a(6),r=(a(0),a(284)),c={id:"badge",title:"Badge"},l={unversionedId:"badge",id:"badge",isDocsHomePage:!1,title:"Badge",description:"Badges are small components typically used to communicate a numerical value or",source:"@site/docs/badge.md",permalink:"/react-native-elements/docs/next/badge",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/badge.md",version:"next",sidebar:"docs",previous:{title:"Avatar",permalink:"/react-native-elements/docs/next/avatar"},next:{title:"Bottom Sheet",permalink:"/react-native-elements/docs/next/bottomsheet"}},i=[{value:"Mini Badge",id:"mini-badge",children:[]},{value:"withBadge Higher-Order Component",id:"withbadge-higher-order-component",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>badgeStyle</code>",id:"badgestyle",children:[]},{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>onPress</code>",id:"onpress",children:[]},{value:"<code>status</code>",id:"status",children:[]},{value:"<code>textProps</code>",id:"textprops",children:[]},{value:"<code>textStyle</code>",id:"textstyle",children:[]},{value:"<code>value</code>",id:"value",children:[]},{value:"<code>Component</code>",id:"component",children:[]}]},{value:"Props for withBadge",id:"props-for-withbadge",children:[]},{value:"Reference for withBadge",id:"reference-for-withbadge",children:[{value:"<code>value</code>",id:"value-1",children:[]},{value:"<code>options</code>",id:"options",children:[]}]}],o={rightToc:i};function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Badges are small components typically used to communicate a numerical value or\nindicate the status of an item to the user."),Object(r.b)("div",{class:"component-preview"},Object(r.b)("figure",null,Object(r.b)("img",{src:"/react-native-elements/img/badge/badge--standard.jpg",alt:"Standard"}),Object(r.b)("figcaption",null,"Standard")),Object(r.b)("figure",null,Object(r.b)("img",{src:"/react-native-elements/img/badge/badge--mini.jpg",alt:"Mini Badge"}),Object(r.b)("figcaption",null,"Mini Badge")),Object(r.b)("figure",null,Object(r.b)("img",{src:"/react-native-elements/img/badge/badge--indicator.jpg",alt:"Badge as Indicator"}),Object(r.b)("figcaption",null,"Badge as Indicator"))),Object(r.b)("h3",{id:"mini-badge"},"Mini Badge"),Object(r.b)("p",null,"This type of badge shows when no ",Object(r.b)("inlineCode",{parentName:"p"},"value")," prop is provided. This form is\neffective for showing statuses."),Object(r.b)("h3",{id:"withbadge-higher-order-component"},"withBadge Higher-Order Component"),Object(r.b)("p",null,"The withBadge HOC allows you to easily add badges to icons and other components."),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { Text, View } from \'react-native\'\nimport { Avatar, Badge, Icon, withBadge } from \'react-native-elements\'\n\n// Standard badge\n<Badge value="99+" status="error" />\n<Badge value={<Text>My Custom Badge</Text>} />\n\n// Mini badge\n<Badge status="success" />\n<Badge status="error" />\n<Badge status="primary" />\n<Badge status="warning" />\n\n// Avatar with mini badge\n<View>\n  <Avatar\n    rounded\n    source={{\n      uri: \'https://randomuser.me/api/portraits/men/41.jpg\',\n    }}\n    size="large"\n  />\n\n  <Badge\n    status="success"\n    containerStyle={{ position: \'absolute\', top: -4, right: -4 }}\n  />\n</View>\n\n// withBadge HOC\n\nconst BadgedIcon = withBadge(1)(Icon)\n<BadgedIcon type="ionicon" name="ios-chatbubbles" />\n\n// Using the decorator proposal\n@connect(state => ({\n  notifications: state.notifications,\n}))\n@withBadge(props => props.notifications.length)\nexport default class MyDecoratedIcon extends React.Component {\n  render() {\n    return (\n      <Icon type="ionicon" name="md-cart" />\n    );\n  }\n}\n')),Object(r.b)("hr",null),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#badgestyle"}),Object(r.b)("inlineCode",{parentName:"a"},"badgeStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#containerstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"containerStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#onpress"}),Object(r.b)("inlineCode",{parentName:"a"},"onPress"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#status"}),Object(r.b)("inlineCode",{parentName:"a"},"status"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#textprops"}),Object(r.b)("inlineCode",{parentName:"a"},"textProps"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#textstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"textStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#value"}),Object(r.b)("inlineCode",{parentName:"a"},"value"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#Component"}),Object(r.b)("inlineCode",{parentName:"a"},"Component")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"reference"},"Reference"),Object(r.b)("h3",{id:"badgestyle"},Object(r.b)("inlineCode",{parentName:"h3"},"badgeStyle")),Object(r.b)("p",null,"Additional styling for badge (background) view component (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Internal Style")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"containerstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(r.b)("p",null,"Style for the container (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Internal Style")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onpress"},Object(r.b)("inlineCode",{parentName:"h3"},"onPress")),Object(r.b)("p",null,"Function called when pressed on the badge"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"status"},Object(r.b)("inlineCode",{parentName:"h3"},"status")),Object(r.b)("p",null,"Determines color of the indicator"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"primary"),", ",Object(r.b)("inlineCode",{parentName:"td"},"success"),", ",Object(r.b)("inlineCode",{parentName:"td"},"warning"),", ",Object(r.b)("inlineCode",{parentName:"td"},"error")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"primary")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"textprops"},Object(r.b)("inlineCode",{parentName:"h3"},"textProps")),Object(r.b)("p",null,"Extra props for text component (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Text props (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"textstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"textStyle")),Object(r.b)("p",null,"Extra styling for icon component (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Text style (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Internal Style")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"value"},Object(r.b)("inlineCode",{parentName:"h3"},"value")),Object(r.b)("p",null,"Text value to be displayed by badge, defaults to empty"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"String OR Number OR React Native Component"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"component"},Object(r.b)("inlineCode",{parentName:"h3"},"Component")),Object(r.b)("p",null,"Custom component to replace the badge outer component"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native Component"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"View, if ",Object(r.b)("inlineCode",{parentName:"td"},"onPress")," then ",Object(r.b)("inlineCode",{parentName:"td"},"TouchableOpacity"))))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"props-for-withbadge"},"Props for withBadge"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#value"}),Object(r.b)("inlineCode",{parentName:"a"},"value"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#options"}),Object(r.b)("inlineCode",{parentName:"a"},"options")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"reference-for-withbadge"},"Reference for withBadge"),Object(r.b)("h3",{id:"value-1"},Object(r.b)("inlineCode",{parentName:"h3"},"value")),Object(r.b)("p",null,"Text value to be displayed by badge, defaults to empty"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"String OR Number OR React Native Component OR Function, which returns one of the former"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"options"},Object(r.b)("inlineCode",{parentName:"h3"},"options")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Also receives all\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/badge#props"}),"Badge")," props.")),Object(r.b)("p",null,"Object with the following (optional) keys:"),Object(r.b)("h4",{id:"bottom"},Object(r.b)("inlineCode",{parentName:"h4"},"bottom")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number (optional)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"undefined")))),Object(r.b)("h4",{id:"left"},Object(r.b)("inlineCode",{parentName:"h4"},"left")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number (optional)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"undefined")))),Object(r.b)("h4",{id:"right"},Object(r.b)("inlineCode",{parentName:"h4"},"right")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number (optional)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-16 (-3 with MiniBadge aka. without ",Object(r.b)("inlineCode",{parentName:"td"},"value"),")")))),Object(r.b)("h4",{id:"top"},Object(r.b)("inlineCode",{parentName:"h4"},"top")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number (optional)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-1 (3 with MiniBadge)")))),Object(r.b)("h4",{id:"hidden"},Object(r.b)("inlineCode",{parentName:"h4"},"hidden")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean (optional)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(r.b)("h4",{id:"containerstyle-1"},Object(r.b)("inlineCode",{parentName:"h4"},"containerStyle")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Internal Style")))),Object(r.b)("hr",null))}p.isMDXComponent=!0},284:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),p=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(a),j=n,m=d["".concat(c,".").concat(j)]||d[j]||O[j]||r;return a?b.a.createElement(m,l(l({ref:t},o),{},{components:a})):b.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<r;o++)c[o]=a[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);