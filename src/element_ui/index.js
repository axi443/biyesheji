import { Button, Select, Option, OptionGroup, Input, Tree, Dialog, Row, Col,  Table,
  TableColumn,
  Menu,
  Submenu,
  MenuItem,

 } from 'element-ui'
const element = {
  install: function(Vue) {
    Vue.use(Button)
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(OptionGroup)
    Vue.use(Input)
    Vue.use(Tree)
    Vue.use(Dialog)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Menu)
    Vue.use(Submenu)
    Vue.use(MenuItem)

  }
}
export default element