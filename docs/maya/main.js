// node_modules/@jsr/ckzero__value-utils/src/misc.js
var isPlainObject = (value) => {
  if (typeof value !== "object" || value === null)
    return false;
  return Object.prototype.toString.call(value) === "[object Object]";
};
var immut = (value) => {
  if (isPlainObject(value)) {
    const copiedObj = {
      ...value
    };
    const newObj = {};
    Object.keys(copiedObj).forEach((key) => {
      newObj[key] = immut(copiedObj[key]);
    });
    return Object.freeze(newObj);
  }
  if (Array.isArray(value)) {
    const copiedArr = [
      ...value
    ];
    const newArr = [];
    copiedArr.forEach((item) => {
      newArr.push(immut(item));
    });
    return newArr;
  }
  return value;
};
var newVal = (oldVal) => {
  if (isPlainObject(oldVal)) {
    const copiedObj = {
      ...oldVal
    };
    const newObj = {};
    Object.keys(copiedObj).forEach((key) => {
      newObj[key] = newVal(copiedObj[key]);
    });
    return newObj;
  }
  if (Array.isArray(oldVal)) {
    const copiedArr = [
      ...oldVal
    ];
    const newArr = [];
    copiedArr.forEach((item) => {
      newArr.push(newVal(item));
    });
    return newArr;
  }
  const value = oldVal;
  return value;
};
// node_modules/@ckzero/maya/src/signal/signal.js
var subscriber = null;
var signal = (value) => {
  let _value = immut(value);
  const subscriptions = new Set;
  return {
    type: "signal",
    get value() {
      if (subscriber)
        subscriptions.add(subscriber);
      return newVal(_value);
    },
    set value(newValue) {
      if (newValue === _value)
        return;
      _value = immut(newValue);
      subscriptions.forEach((callback) => callback && callback());
    }
  };
};
var effect = (fn) => {
  subscriber = fn;
  fn();
  subscriber = null;
};
var derived = (signalValueGetter) => {
  const derivedSignal = signal(null);
  effect(() => {
    derivedSignal.value = signalValueGetter();
  });
  return derivedSignal;
};
var valueIsSignal = (value) => !!(value?.type === "signal");

// node_modules/@ckzero/maya/src/signal/array-signal.js
var valueIsArrSignal = (value) => !!value?.isIndexedArraySignal;
// node_modules/@ckzero/maya/src/web/constants.js
var mayaEventKeys = [
  "onunmount"
];
var htmlEventKeys = [
  "onafterprint",
  "onbeforeprint",
  "onbeforeunload",
  "onerror",
  "onhashchange",
  "onload",
  "onmessage",
  "onoffline",
  "onpagehide",
  "onpageshow",
  "onpopstate",
  "onredo",
  "onresize",
  "onstorage",
  "onundo",
  "onunload",
  "onblur",
  "onchange",
  "oncontextmenu",
  "onfocus",
  "onformchange",
  "onforminput",
  "oninput",
  "oninvalid",
  "onreset",
  "onselect",
  "onsubmit",
  "onkeydown",
  "onkeypress",
  "onkeyup",
  "onclick",
  "ondblclick",
  "ondrag",
  "ondragend",
  "ondragenter",
  "ondragleave",
  "ondragover",
  "ondragstart",
  "ondrop",
  "onmousedown",
  "onmousemove",
  "onmouseout",
  "onmouseover",
  "onmouseup",
  "onmousewheel",
  "onscroll",
  "onabort",
  "oncanplay",
  "oncanplaythrough",
  "ondurationchange",
  "onemptied",
  "onended",
  "onerror",
  "onloadeddata",
  "onloadedmetadata",
  "onloadstart",
  "onpause",
  "onplay",
  "onplaying",
  "onprogress",
  "onratechange",
  "onreadystatechange",
  "onseeked",
  "onseeking",
  "onstalled",
  "onsuspend",
  "ontimeupdate",
  "onvolumechange",
  "onwaiting"
];
var eventKeys = [
  ...htmlEventKeys,
  ...mayaEventKeys
];
var htmlTagNames = [
  "a",
  "abbr",
  "acronym",
  "address",
  "applet",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "basefont",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "meta",
  "meter",
  "nav",
  "noframes",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];

// node_modules/@ckzero/maya/src/web/common.js
var valueIsMayaNode = (value) => !!value?.mayaId;

// node_modules/@ckzero/maya/src/web/mutations.js
var mountRecord = {};
var unmountRecord = {};
var mountUnmountObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "childList") {
      mutation.addedNodes.forEach((node) => {
        if (valueIsMayaNode(node)) {
          const el = node;
          const elMayaId = el.mayaId;
          if (unmountRecord[elMayaId])
            delete unmountRecord[elMayaId];
          else
            mountRecord[elMayaId] = el.tagName;
        }
      });
      mutation.removedNodes.forEach((node) => {
        if (valueIsMayaNode(node)) {
          const el = node;
          const elMayaId = el.mayaId;
          const unmountListener = el.unmountListener;
          if (unmountListener)
            unmountRecord[elMayaId] = {
              el,
              unmountListener
            };
        }
      });
    }
  });
  Object.entries(unmountRecord).forEach(([_, listenerData]) => {
    const { el, unmountListener } = listenerData;
    execSubtreeUnmountListeners(el, unmountListener);
  });
});
var execSubtreeUnmountListeners = (el, elUnmountListener) => {
  if (!valueIsMayaNode(el))
    return;
  const elChildren = el.children;
  for (var i = 0;i < elChildren.length; i++) {
    var elChild = elChildren[i];
    execSubtreeUnmountListeners(elChild, elChild.unmountListener);
  }
  elUnmountListener && elUnmountListener();
  if (unmountRecord[el.mayaId])
    delete unmountRecord[el.mayaId];
};

// node_modules/@ckzero/maya/src/web/core.js
var idGen = () => {
  let elId = 0;
  return {
    getNewId: () => ++elId,
    resetIdCounter: () => elId = 0
  };
};
var { getNewId, resetIdCounter } = idGen();
var phaseHelper = () => {
  let buildPhase = false;
  let domAccessPhase = false;
  return {
    isBuildPhase: () => buildPhase,
    isDomAccessPhase: () => domAccessPhase,
    enableBuildPhase: () => {
      resetIdCounter();
      buildPhase = true;
    },
    disableBuildPhase: () => {
      resetIdCounter();
      buildPhase = false;
    },
    enableDomAccessPhase: () => domAccessPhase = true,
    disableDomAccessPhase: () => domAccessPhase = false
  };
};
var { isBuildPhase, isDomAccessPhase, enableBuildPhase, disableBuildPhase, enableDomAccessPhase, disableDomAccessPhase } = phaseHelper();
var runScript = (page) => {
  mountUnmountObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
  setTimeout(() => {
    enableDomAccessPhase();
    page();
    disableDomAccessPhase();
  });
};
var getPropValue = (prop) => {
  if (typeof prop === "string" || valueIsMayaNode(prop) || valueIsSignal(prop))
    return prop;
  if (typeof prop === "function") {
    const signalledProp = derived(prop);
    return signalledProp;
  }
  console.log(typeof prop, prop);
  throw new Error("prop passed in component should be only string, signal-object or function");
};
var getMayaTextNode = (text) => {
  const textNode = document.createTextNode(text);
  textNode.mayaId = undefined;
  textNode.unmountListener = undefined;
  return textNode;
};
var getDomNode = (child) => {
  const maybeSignalChild = typeof child === "string" ? getMayaTextNode(child) : valueIsSignal(child) ? getDomNode(child.value) : child;
  return maybeSignalChild;
};
var attributeIsEvent = (attrKey, attrValue) => eventKeys.includes(attrKey) && typeof attrValue === "function";
var attributeIsHtmlEvent = (attrKey, attrValue) => htmlEventKeys.includes(attrKey) && attributeIsEvent(attrKey, attrValue);
var attributeIsMayaEvent = (attrKey, attrValue) => mayaEventKeys.includes(attrKey) && attributeIsEvent(attrKey, attrValue);
var handleAttributeProps = (el, attributes) => {
  const attribSignals = {};
  const getAttrValueString = (attrValue) => valueIsSignal(attrValue) ? getAttrValueString(attrValue.value) : attrValue;
  const setAttribute = (el2, attrKey, attrValue) => {
    if (attrKey === "value") {
      el2.value = getAttrValueString(attrValue);
    } else {
      el2.setAttribute(attrKey, getAttrValueString(attrValue));
    }
  };
  Object.entries(attributes).forEach((attrib) => {
    const [attrKey, attrVal] = attrib;
    const maybeSignalAttrVal = getPropValue(attrVal);
    if (valueIsSignal(maybeSignalAttrVal)) {
      attribSignals[attrKey] = maybeSignalAttrVal;
    } else {
      setAttribute(el, attrKey, maybeSignalAttrVal);
    }
  });
  const attrSignalsEffect = () => {
    Object.entries(attribSignals).forEach(([attrKey, attrValue]) => {
      setAttribute(el, attrKey, attrValue);
    });
  };
  if (isBuildPhase()) {
    attrSignalsEffect();
    return;
  }
  effect(attrSignalsEffect);
};
var handleChildrenProps = (el, childrenProp) => {
  const childProp = childrenProp.children;
  if (childrenProp.type === "childrenSignal") {
    const nodesListSignal = childProp;
    const nodesListSignalEffect = () => {
      nodesListSignal.value.forEach((node, index) => {
        const prevChildNode = el.childNodes[index];
        const newChildNode = getDomNode(node);
        if (prevChildNode && newChildNode) {
          el.replaceChild(newChildNode, prevChildNode);
        } else if (newChildNode) {
          el.appendChild(newChildNode);
        } else {
          console.error(`No child found for element with tagName: ${el.tagName}`);
        }
      });
      for (let i = nodesListSignal.value.length;i < el.childNodes.length; i++) {
        el.removeChild(el.childNodes[i]);
      }
    };
    if (isBuildPhase()) {
      nodesListSignalEffect();
    } else {
      effect(nodesListSignalEffect);
    }
  } else if (childrenProp.type === "innerText") {
    const maybeTextSignal = getPropValue(childProp);
    const textSignalEffect = () => {
      const innerText = valueIsSignal(maybeTextSignal) ? maybeTextSignal.value : maybeTextSignal;
      el.textContent = innerText;
    };
    if (isBuildPhase()) {
      textSignalEffect();
    } else {
      effect(textSignalEffect);
    }
  } else if (childrenProp.type === "children") {
    const children = childProp;
    const fixedSignalNodes = [];
    const sanitisedChildren = children.filter((child) => !!child).map((child) => getPropValue(child));
    sanitisedChildren.forEach((maybeSignalChild, index) => {
      if (valueIsSignal(maybeSignalChild)) {
        fixedSignalNodes.push({
          index,
          signalNode: maybeSignalChild
        });
      }
      const childNode = getDomNode(maybeSignalChild);
      el.appendChild(childNode);
    });
    if (fixedSignalNodes.length) {
      fixedSignalNodes.forEach(({ index, signalNode }) => {
        const fixedSignalNodeEffect = () => {
          const newChildNode = getDomNode(signalNode.value);
          if (!newChildNode)
            return;
          const prevChildNode = el.childNodes[index];
          if (prevChildNode && newChildNode) {
            el.replaceChild(newChildNode, prevChildNode);
          } else if (newChildNode) {
            el.appendChild(newChildNode);
          } else {
            console.error(`No child found for element with tagName: ${el.tagName}`);
          }
        };
        if (isBuildPhase()) {
          fixedSignalNodeEffect();
        } else {
          effect(fixedSignalNodeEffect);
        }
      });
    }
  } else {
    if (!childProp) {
      return;
    } else {
      throw new Error(`Invalid children prop type: ${childrenProp.type} for element with tagName: ${el.tagName}`);
    }
  }
};
var handleEventProps = (el, events) => {
  Object.entries(events).forEach(([eventName, listenerFn]) => {
    if (attributeIsHtmlEvent(eventName, listenerFn)) {
      const eventKey = eventName.slice(2);
      el.addEventListener(eventKey, (e) => {
        if (eventKey === "keypress") {
          e.preventDefault();
        }
        listenerFn(e);
      });
    } else if (attributeIsMayaEvent(eventName, listenerFn) && eventName === "onunmount") {
      el.unmountListener = listenerFn;
    } else {
      console.error(`Invalid event key: ${eventName} for element with tagName: ${el.tagName}`);
    }
  });
};
var getNodesEventsAndAttributes = (props) => {
  const children = {};
  const events = {};
  const attributes = {};
  Object.entries(props).forEach(([propKey, propValue]) => {
    if (propKey === "innerText") {
      children["type"] = "innerText";
      children["children"] = propValue;
    } else if (propKey === "children") {
      if (Array.isArray(propValue)) {
        children["type"] = "children";
        children["children"] = propValue;
      } else if (valueIsSignal(propValue) && Array.isArray(propValue.value)) {
        children["type"] = "childrenSignal";
        children["children"] = propValue;
      }
    } else if (attributeIsEvent(propKey, propValue)) {
      events[propKey] = propValue;
    } else {
      attributes[propKey] = propValue;
    }
  });
  return {
    children,
    events,
    attributes
  };
};
var createEl = (tagName, props) => {
  const elementId = getNewId();
  const el = isDomAccessPhase() ? document.querySelector(`[data-maya-id="${elementId}"]`) : document.createElement(tagName);
  el.mayaId = elementId;
  el.unmountListener = undefined;
  props["data-maya-id"] = el.mayaId.toString();
  const { children, events, attributes } = getNodesEventsAndAttributes(props);
  handleAttributeProps(el, attributes);
  handleChildrenProps(el, children);
  handleEventProps(el, events);
  return el;
};

// node_modules/@ckzero/maya/src/web/components.js
function Component(comp) {
  return function(props) {
    const allProps = Object.entries(props).reduce((map, [key, value]) => {
      map[key] = valueIsSignal(value) || valueIsArrSignal(value) || typeof value === "function" ? value : derived(() => value);
      return map;
    }, {});
    return comp(allProps);
  };
}
var m = htmlTagNames.reduce((map, tagName) => {
  const mayaTag = tagName.split("").map((char, index) => !index ? char.toUpperCase() : char).join("");
  map[mayaTag] = (props) => createEl(tagName, props);
  return map;
}, {});
// node_modules/@ckzero/maya/src/web/html.js
var defaultMetaTags = () => [
  m.Meta({
    charset: "UTF-8"
  }),
  m.Meta({
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge"
  }),
  m.Meta({
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  })
];
// ../cyfer/@assets/styles.css
var styles_default = "./styles-7ddbb19aea4d6c23.css";

// ../cyfer/@elements/brand-logo.ts
var BrandLogo = Component(({ logoSrc, logoHref, logoSize, labelComponent }) => {
  const size = `${logoSize?.value || 32}`;
  return m.A({
    class: "space-mono link black flex items-center justify-start",
    href: logoHref.value,
    children: [
      m.Img({
        src: logoSrc.value,
        height: size,
        width: size
      }),
      labelComponent?.value || m.Div({ class: "db" })
    ]
  });
});
// ../cyfer/@elements/divider.ts
var Divider = Component(({ className }) => m.Div({
  class: `bl b--moon-gray min-vh-20 ${className?.value || ""}`
}));
// ../cyfer/@assets/images/cyfer-logo.png
var cyfer_logo_default = "./cyfer-logo-b683dbcfab1558d8.png";

// ../cyfer/@elements/view-frame.ts
var ViewFrame = Component(({ classNames, contentClassNames, children }) => {
  return m.Div({
    class: `w-100 bg-pale ${classNames?.value || ""}`,
    children: [
      m.Div({
        class: `mw8 center ${contentClassNames?.value || ""}`,
        children
      })
    ]
  });
});

// ../cyfer/@elements/link.ts
var Link = Component(({ classNames, colorCss, target, href, label }) => m.A({
  class: `link underline ${colorCss?.value || "red"} ${classNames?.value || ""}`,
  target: target?.value || "",
  href: href.value,
  innerText: label.value
}));

// ../cyfer/@elements/titled-list.ts
var TitledList = Component(({
  classNames,
  titleClassNames,
  itemClassNames,
  header,
  justifyRight,
  links,
  linkColorCss,
  bottomComponent
}) => m.Div({
  class: `${justifyRight?.value ? "tr" : ""} ${classNames?.value || ""}`,
  children: [
    m.P({
      class: `space-mono mt0 f3 lh-solid ${titleClassNames?.value || ""}`,
      innerText: header.value
    }),
    ...(links.value || []).map((link2) => m.Div({
      class: `${itemClassNames?.value || ""}`,
      children: [
        Link({
          colorCss: linkColorCss?.value,
          href: link2.href,
          label: link2.label
        })
      ]
    })),
    bottomComponent?.value || m.Div({ class: "dn" })
  ]
}));

// ../cyfer/@elements/footer.ts
var Footer = Component(({ colorCss }) => ViewFrame({
  classNames: "bg-pale-dark",
  contentClassNames: "flex items-start justify-between ph3 pv4",
  children: [
    m.Div({
      class: "flex flex-column items-stretch justify-between",
      children: [
        m.Div({
          children: [
            m.A({
              class: "flex items-center justify-start no-underline",
              href: "/",
              children: [
                m.Img({
                  src: cyfer_logo_default,
                  height: "32",
                  width: "32"
                })
              ]
            }),
            m.P({
              class: "m0 f7",
              innerText: "\xA9 2024 Cyfer Tech."
            }),
            m.P({
              class: "nt2 f7",
              innerText: "All rights reserved."
            })
          ]
        }),
        m.Span({
          class: "mt4 pt3 mb0",
          children: [
            m.Span({
              innerText: "This site is created using "
            }),
            Link({
              colorCss: colorCss?.value,
              classNames: "underline",
              href: "maya",
              label: "Maya"
            }),
            m.Span({
              innerText: "."
            })
          ]
        })
      ]
    }),
    m.Div({
      class: "flex items-start justify-between",
      children: [
        TitledList({
          justifyRight: true,
          linkColorCss: colorCss?.value,
          classNames: "pr3",
          itemClassNames: "mb3",
          header: "Company",
          links: [
            {
              label: "About us",
              href: "#about-us"
            },
            {
              label: "Blogs",
              href: "#blogs"
            },
            {
              label: "Team",
              href: "#about-us"
            },
            {
              label: "Career",
              href: "/careers"
            }
          ]
        }),
        Divider({ className: "mh4 ph2" }),
        TitledList({
          justifyRight: true,
          linkColorCss: colorCss?.value,
          classNames: "pr3",
          itemClassNames: "mb3",
          header: "Products",
          links: [
            {
              label: "Maya",
              href: "/maya"
            },
            {
              label: "KarmaJs",
              href: "/karma"
            },
            {
              label: "Yajman",
              href: "/yajman"
            },
            {
              label: "Batua",
              href: "/batua"
            }
          ]
        }),
        Divider({ className: "mh4 ph2" }),
        m.Div({
          children: [
            TitledList({
              justifyRight: true,
              itemClassNames: "mb3",
              linkColorCss: colorCss?.value,
              header: "Relations",
              links: [
                {
                  label: "Sponsor Us",
                  href: "/sponsor-us"
                },
                {
                  label: "FAQs",
                  href: "/faqs"
                },
                {
                  label: "Feedback",
                  href: "/feedback"
                }
              ],
              bottomComponent: m.Span({
                class: "flex items-center justify-end",
                children: [
                  m.A({
                    target: "_blank",
                    href: "https://github.com/thecyfertech",
                    children: [
                      m.Img({
                        class: "ba b--none br-100",
                        src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                        height: "32",
                        width: "32"
                      })
                    ]
                  }),
                  m.A({
                    class: "ml3",
                    target: "_blank",
                    href: "https://twitter.com/thecyfertech",
                    children: [
                      m.Img({
                        class: "ba b--none br-100",
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAA/0lEQVR4AbXPIazCMACE4d+L2qoZFEGSIGcRc/gJJB5XMzGJmK9EN0HMi+qaibkKVF1txdQe4g0YzPK5yyWXHL9TaPNQ89LojH87N1rbJcXkMF4Fk31UMrf34hm14KUeoQxGArALHTMuQD2cAWQfJXOpgTbksGr9ng8qluShJTPhyCdx63POg7rEim95ZyR68I1ggQpnCEGwyPicw6hZtPEGmnhkycqOio1zm6XuFtyw5XDXfGvuau0dXHzJp8pfBPuhIXO9ZK5ILUCdSvLYMpc6ASBtl3EaC97I4KaFaOCaBE9Zn5jUsVqR2vcTJZO1DdbGoZryVp94Ka/mQfE7f2T3df0WBhLDAAAAAElFTkSuQmCC",
                        height: "24",
                        width: "24"
                      })
                    ]
                  })
                ]
              })
            })
          ]
        })
      ]
    })
  ]
}));
// ../cyfer/@elements/header.ts
var Header = Component(({
  logoSize,
  logoSrc,
  logoHref,
  logoLabelComponent,
  links,
  rightmostComponent
}) => m.Div({
  class: "pa3 bg-pale sticky top-0 flex items-center justify-between",
  children: [
    BrandLogo({
      logoSize: logoSize.value,
      logoSrc: logoSrc.value,
      logoHref: logoHref.value,
      labelComponent: logoLabelComponent?.value
    }),
    m.Div({
      class: "flex items-center justify-end",
      children: [
        ...links.value.map((link4) => Link({
          classNames: "ml4",
          colorCss: link4.colorCss,
          href: link4.href,
          label: link4.label
        })),
        rightmostComponent?.value || m.Div({ class: "dn" })
      ]
    })
  ]
}));
// ../cyfer/@elements/navbar.ts
var Navbar = Component(({ children }) => {
  return m.Div({
    class: `dn db-ns w5 pa3 max-h-80 overflow-y-scroll`,
    style: `
      scrollbar-color: #e8e8e8 #f2f1f0;
      scrollbar-width: thin;
    `,
    children
  });
});
// ../cyfer/@assets/images/maya-logo.png
var maya_logo_default = "./maya-logo-b8fc0e72d41acc15.png";

// ../cyfer/maya/@components/maya-header.ts
var MayaHeader = () => Header({
  logoHref: "/maya",
  logoSrc: maya_logo_default,
  logoSize: 36,
  logoLabelComponent: m.A({
    class: "ml3 link black no-underline",
    href: "/maya",
    children: [
      m.Div({
        class: `f4`,
        innerText: "MAYA"
      }),
      Link({
        classNames: `f7`,
        colorCss: "black",
        target: "_blank",
        href: "https://github.com/ckzer0/maya-deno",
        label: "0.1.8"
      })
    ]
  }),
  links: [
    { colorCss: "purple", href: "/maya/docs", label: "Docs" },
    { colorCss: "purple", href: "/maya/tutorial", label: "Tutorial" },
    {
      colorCss: "purple",
      href: "/blogs?tags=maya,brahma,signal",
      label: "Blogs"
    }
  ]
});
// ../cyfer/maya/app.ts
var App = () => {
  return m.Div({
    class: "bg-pale",
    children: [
      ViewFrame({
        children: [
          MayaHeader(),
          m.Div({
            class: "pv3 ph5 flex-grow-1",
            innerText: "Maya UI home page"
          })
        ]
      }),
      Footer({
        colorCss: "purple"
      })
    ]
  });
};

// ../cyfer/maya/page.ts
var page = () => m.Html({
  lang: "en",
  children: [
    m.Head({
      children: [
        ...defaultMetaTags(),
        m.Title({
          innerText: "Maya UI Library"
        }),
        m.Link({
          rel: "stylesheet",
          href: "https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
        }),
        m.Link({
          rel: "stylesheet",
          href: styles_default
        })
      ]
    }),
    m.Body({
      children: [
        m.Script({
          src: "main.js",
          defer: "true"
        }),
        App()
      ]
    })
  ]
});

// ../cyfer/maya/main.ts
runScript(page);
