import Vue from 'vue'
import Element, {
  Button, Form, FormItem, Input, Message, Container, Header, Aside, Main,
  Menu, Submenu, MenuItem, Breadcrumb, BreadcrumbItem, Card, Row, Col,
  Table, TableColumn, Pagination
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element).use(Button).use(Form).use(FormItem).use(Input).use(Container).use(Header).use(Aside).use(Main)
  .use(Menu).use(Submenu).use(MenuItem).use(Breadcrumb).use(BreadcrumbItem).use(Card).use(Row).use(Col)
  .use(Table).use(TableColumn).use(Pagination)

Vue.prototype.$message = Message
