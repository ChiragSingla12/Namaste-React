# Namaste React 🚀

package.json = configuration for npm
^ caret use for minor version upgrade and ~tilde use for major version upgraade

package.lock.json = tracks exact version of being used of any package.It will show(package.lock.json ) when we install any dependency as its tracks of version of it and also node_modules.

node_modules = contains the actual code of the dependencies
parcel/webpack/vite => all are the bundlers ie that bundles our code

transitive dependencies = dependencies of dependencies
npm install = create node_modules if deleted
npm i react and npm i react-dom
npx parcel index.html => this will install parcel-cache and dist folder
npx parcel build index.html => for prod build
browserList = for the browsers where our app will support
npm run start = npm start
npm run build != npm build

Lecture = 3
JSX = html like syntax
=> giving attributes to JSX is always in camel-case.
=> for writing multiple lines of jsx code. we need to keep it in the round brackets like this (). So that the Babel understands where the jsx code will start and end of the jsx code.
=> for single line of jsx code. we dont need any round brackets.
=> JSX prevents cross site scripting attacks for you.

**_ Babel do transpilation of jsx code to react code to make understandable to browsers(Ecmascript);
_** Babel do all this => jsx => converts into react.createElement => react element-JS object = HTMLElement(render)

Component: normal js function

=> A fn that is returning a react element/jsx code is become a functional component Eg.

const HeadingComponent = () => {
return <h4>Namaste react functional components</h4>
}
=> component name first letter must be in capital letter(see above Eg. ie HeadingComponent)
=> components are rendered like this <HeadingComponent/>
=> root.render converting everything to html that browser understands.
=> we can write the functional components using arrow functions as well as nornal functions. but in all places we use arrow functions.

Component Composition => component inside conponent
dist=> hosted things coming from the dist folder and parcel-cache when we save the files it uses parcel cache and dist to update it using hot module replacement.

Lecture - 04
=> Config driven UI: different data with different locations(like discount, offers etc).
key: whenever we use map function, we have to pass key also to avoid warning. with the use of key, react only render again the newly rescard, not rerendered the whole cards again and again when new rescard is added and we can also use index as the key also.but this is a bad practice.

lecture - 05
Two types of Improt/Exports:

default export is used when we have to export only one thing(component etc) and named export are used when we have to export multiple things(components etc) For Eg in file constants.js.
=> for named export we use export keyword in front of function or component that we want to export.

The name of imported module has to be the same as the name of the exported module. In Named export, the component is exported from MyComponent.js file like:

export const MyComponent = () => {}
export const MyComponent2 = () => {}
and the component is imported from MyComponent.js file like: here we must use {} in MyComponent.
// ex. importing a single named export
import { MyComponent } from "./MyComponent";

// ex. importing multiple named exports
import { MyComponent, MyComponent2 } from "./MyComponent";

// ex. giving a named import a different name by using "as":
import { MyComponent2 as MyNewComponent } from "./MyComponent";

In _ as export, it is used to import the whole module as a component and access the components inside the module. In _ as export, the component is exported from MyComponent.js file like:

export const MyComponent = () => {}
export const MyComponent2 = () => {}
export const MyComponent3 = () => {}
and the component is imported from MyComponent.js file like:

import \* as MainComponents from "./MyComponent";
Now we can use them in JSX as:

<MainComponents.MyComponent />
<MainComponents.MyComponent2 />
<MainComponents.MyComponent3 />
We can use Named export and Default export together. So you should export like:

export const MyComponent2 = () => {}
const MyComponent = () => {}
export default MyComponent;
and import like:

import MyComponent, {MyComponent2} from "./MyComponent";
