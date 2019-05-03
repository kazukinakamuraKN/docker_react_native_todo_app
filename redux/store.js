import { createStore,} from 'redux';
import rootReducer from './reducers'

  export default store = createStore(rootReducer)
  
  // storeは巨大なjsonです。storeの中身を取り出すにはgetStateメソッドを使います。
  // エミュレータでcommand + dを押し、enable remote debugをクリックしましょう。
  // debuggerが現れるので、consoleタブをクリックし、エミュレータ上でアプリをcommandd + rで再起動しましょう。
  // console.log(store.getState)
  
  // // arrayやobjectを綺麗に表示したい時はconsole.tableが便利です。
  // console.table(store.getState)
  
  // // storeはjsonです。つまりjsのオブジェクトです。 jsの関数のtypeofでstoreのstateがオブジェクトであることを確かめましょう。
  // console.log(typeof store.getState)
  
  // // storeもまたjsのオブジェクトであり、４つしかメソッドを持たないことを確認しておきましょう。
  // console.log(store)