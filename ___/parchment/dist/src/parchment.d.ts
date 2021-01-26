import ContainerBlot from './blot/abstract/container';
import FormatBlot from './blot/abstract/format';
import LeafBlot from './blot/abstract/leaf';
import ScrollBlot from './blot/scroll';
import InlineBlot from './blot/inline';
import BlockBlot from './blot/block';
import EmbedBlot from './blot/embed';
import TextBlot from './blot/text';
import Attributor from './attributor/attributor';
import ClassAttributor from './attributor/class';
import StyleAttributor from './attributor/style';
import AttributorStore from './attributor/store';
import * as Registry from './registry';
declare let Parchment: {
    Scope: typeof Registry.Scope;
    create: typeof Registry.create;
    find: typeof Registry.find;
    query: typeof Registry.query;
    register: typeof Registry.register;
    Container: typeof ContainerBlot;
    Format: typeof FormatBlot;
    Leaf: typeof LeafBlot;
    Embed: typeof EmbedBlot;
    Scroll: typeof ScrollBlot;
    Block: typeof BlockBlot;
    Inline: typeof InlineBlot;
    Text: typeof TextBlot;
    Attributor: {
        Attribute: typeof Attributor;
        Class: typeof ClassAttributor;
        Style: typeof StyleAttributor;
        Store: typeof AttributorStore;
    };
};
export default Parchment;
