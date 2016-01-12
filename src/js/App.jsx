require('../css/App.scss');
require('../index.html');

var Inputs = require('Inputs.jsx');
var Records = require('Records.jsx');
var serializer = require('RecordsSerializer.js')


console.clear();



/*
 █████  ██████  ██████
██   ██ ██   ██ ██   ██
███████ ██████  ██████
██   ██ ██      ██
██   ██ ██      ██
*/
var App = React.createClass({
	getInitialState: function() {
		return {
			records:[],
			hash:''
		};
	},





	/*
	██████  ███████  ██████  ██████  ██████  ██████  ███████
	██   ██ ██      ██      ██    ██ ██   ██ ██   ██ ██
	██████  █████   ██      ██    ██ ██████  ██   ██ ███████
	██   ██ ██      ██      ██    ██ ██   ██ ██   ██      ██
	██   ██ ███████  ██████  ██████  ██   ██ ██████  ███████
	*/
	addRecord:function(r){
		var rr = this.state.records;
		rr.push(r);
		this.setRecords(rr);
	},
	removeRecord:function(idx){
		var rr = this.state.records;
		rr.splice(idx,1)
		this.setRecords(rr)
	},
    removeAllRecord:function(){
        if(confirm('是否清空紀錄') == true){
          this.setState({
			records: [],
			hash: ''
		  });   
        }
    },
	toggleRecord:function(idx){
		var rr = this.state.records;
		rr[idx].dep = !rr[idx].dep;
		this.setRecords(rr)
	},


	setRecords:function(rr){
		rr = rr.sort(function(r1,r2){
			return r1.date.getTime()-r2.date.getTime()
		});		
		var hash = serializer.stringify(rr);
		window.location.hash=hash;
		this.setState({
			records: rr,
			hash: hash
		})
	},






	/*
	 ██████ ██████  ███    ███
	██      ██   ██ ████  ████
	██      ██   ██ ██ ████ ██
	██      ██   ██ ██  ██  ██
	 ██████ ██████  ██      ██
	*/
	componentDidMount: function() {
		var hash = window.location.hash.replace(/^#/,'');
		var rr = serializer.parse(hash);
		this.setRecords(rr);
	},

	/*
	██████  ███████ ███    ██ ██████  ███████ ██████
	██   ██ ██      ████   ██ ██   ██ ██      ██   ██
	██████  █████   ██ ██  ██ ██   ██ █████   ██████
	██   ██ ██      ██  ██ ██ ██   ██ ██      ██   ██
	██   ██ ███████ ██   ████ ██████  ███████ ██   ██
	*/
	render:function(){
		var hashURL = window.location.origin+window.location.pathname+'#'+this.state.hash;
		return(
			<div className='app'>
				<h1>最近一年居住國內超過183日試算器</h1>
                <h3>1.社會救助法第4條第5項規定略以，(中)低收入戶申請人最近一年居住國內應超過183日。</h3>
                <h3>2.「出境日」視為未居住國內，「入境日」視為居住國內。</h3>
                <h3>3.本程式僅提供簡易試算功能，實際結果仍須經主關機關核算認定。</h3>
                <br/>

				<Inputs setRecords={this.setRecords} addRecord={this.addRecord} removeAllRecord={this.removeAllRecord}/>
				日期格式: 1030602<br/>


				<Records
					records={this.state.records}
					removeRecord={this.removeRecord}
					toggleRecord={this.toggleRecord}
					/>

				<br/>

				{this.state.hash==''?null:
					<div>
						記錄網址: <a href={hashURL}>{hashURL}</a>
					</div>
				}
				<br/>
				<br/>
				<div className='tips'>
                  <h2>操作說明</h2><br/>
					<p>
						輸入框中<br/>
						按 Q 或 Numpad+ 可切換為 [入境]<br/>
						按 W 或 Numpad- 可切換為 [出境]<br/>
						按 E 或 Numpad/ 可切換[出境]與[入境]<br/>
					</p>
					<p>
						記錄的出入境標記可點擊以切換<br/>
						Ctrl-點擊記錄的移除標記可略過確認框
					</p>
                    <br/>
                  
                  <h2>一、移民署格式匯入（承辦作業專用）</h2>
                    
                    <p>1.已取得內政部移民署線上應用服務系統帳號，並有入出境資訊查詢權限者，可透過該系統查詢歷次出入境紀錄。</p>
                    <p>2.將該系統產出之歷次出入境紀錄，整批複製並貼上到183日試算系統欄位，即可運算是否符合最近一年居住國內超過183日之規定。</p>
                    <br/>
                  
                  <h2>二、手動輸入</h2>
                    
                    <p>1.點選「出境」或「入境」後，輸入對應之出境或入境日期，再點選「加入」。</p>
                    <p>2.日期格式範例：如為105年1月1日，則輸入「1050101」</p>
                    <p>3.將歷次出入境紀錄依序輸入完畢後，即可運算是否符合最近一年居住國內超過183日之規定。</p>
				</div>
				<br/>
				<a href="https://github.com/scars377/days183" style={{fontSize:'12px'}} target="_blank">
					https://github.com/scars377/days183
				</a>
			</div>
		);
	}
});

module.exports = App;
ReactDOM.render(<App/>,$('#wrapper')[0])
