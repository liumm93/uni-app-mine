<template>
	<view class="content">
		<view class="title">
			<view>总数：{{bomb_total}}</view>
			<view class="warning" @tap="initMap()">重试</view>
			<view>剩余：{{bomb_num}}</view>
		</view>
		<view class="row" v-for="(row, i) in maps" :key="'row-' + i">
			<view v-for="(value, j) in row" :key="'col-' + j">
				<view class="block" @tap="setSafe(i, j)" @longpress="setBomb(i, j)">
					<view v-if="(is_success || is_fail || shows[i][j] == 1)">
						<view v-if="maps[i][j] == -1">
							<image src="./../../static/boom.png"></image>
						</view>
						<view v-if="maps[i][j] == -2">
							<image src="../../static/error.png"></image>
						</view>
						<view v-if="maps[i][j] > 0">{{maps[i][j]}}</view>
					</view>
					<view v-else class="warning">?</view>
				</view>
			</view>
		</view>
		<view class="desc warning">
			<p>说明：</p>
			<p>1、“长按”标记雷；</p>
			<p>2、“点击”标记安全；</p>
			<p>3、“问号”表示未排除；</p>
			<p>4、点击“重试”再玩一次。</p>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			width: {
				type: Number,
				default: 9
			},
			height: {
				type: Number,
				default: 9
			},
			bomb_total: {
				type: Number,
				default: 10,
			},
		},
		watch: {
			width(newVal) {
				this.initMap()
			},
			height(newVal) {
				this.initMap()
			},
			bombTotal(newVal) {
				this.initMap()
			}
		},
		data() {
			return {
				maps: [],
				shows: [],
				bomb_num: this.bomb_total,
				is_fail: false,
				is_success: false,
			}
		},
		onLoad() {
			this.initMap();
		},
		methods: {
			initMap() {
				this.is_fail = false;
				this.is_success = false;
				this.bomb_num = this.bomb_total;
				this.maps = [];
				this.shows = [];

				for (let x = 0; x < this.width; x++) {
					let mapRow = [];
					let showRow = [];
					for (let y = 0; y < this.height; y++) {
						mapRow.push(0);
						showRow.push(0);
					}

					this.maps.push(mapRow);
					this.shows.push(showRow);
				}

				let bomb = this.bomb_total;
				while (bomb > 0) {
					let x = parseInt(Math.random() * this.width);
					let y = parseInt(Math.random() * this.height);

					if (this.maps[x][y] != -1) {
						this.maps[x][y] = -1;
						bomb--;
					}
				}

				for (let x = 0; x < this.width; x++) {
					for (let y = 0; y < this.height; y++) {
						if (this.maps[x][y] == -1) {
							let index = [
								[x - 1, y - 1],
								[x - 1, y],
								[x - 1, y + 1],
								[x, y - 1],
								[x, y + 1],
								[x + 1, y - 1],
								[x + 1, y],
								[x + 1, y + 1],
							];

							for (let [m, n] of index) {
								if (0 <= m &&
									this.width > m &&
									0 <= n &&
									this.height > n &&
									this.maps[m][n] != -1) {
									this.maps[m][n]++;
								}
							}
						}
					}
				}
			},

			setSafe(i, j) {
				if (this.shows[i][j] == 1) {
					return;
				}
				
				if (this.maps[i][j] == -1) {
					this.is_fail = true;
					this.maps[i][j] = -2;
				} else if (this.maps[i][j] > 0) {
					this.shows[i][j] = 1;
				} else {
					let row = i,
						col = j;

					this.setShow(row, col);
				}

				this.$forceUpdate();
			},

			setShow(row, col) {
				if (row <0 || row >= this.height ||
					col < 0 || col >= this.width ||
					this.shows[row][col] == 1) {
					return;
				}

				this.shows[row][col] = 1;
				if (this.maps[row][col] > 0) {
					return;
				}

				this.setShow(row, col - 1);
				this.setShow(row, col + 1);
				this.setShow(row - 1, col);
				this.setShow(row - 1, col - 1);
				this.setShow(row - 1, col + 1);
				this.setShow(row + 1, col);
				this.setShow(row + 1, col - 1);
				this.setShow(row + 1, col + 1);
			},

			setBomb(i, j) {
				if (this.shows[i][j] == 1) {
					return;
				}
				
				if (this.maps[i][j] == -1) {
					this.bomb_num--;
				} else {
					this.is_fail = true;
					this.maps[i][j] = -2;
				}

				if (this.bomb_num == 0) {
					this.is_success = true;
				}

				this.shows[i][j] = 1;
				this.$forceUpdate();
			},
		}
	}
</script>

<style>
	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.title{
		width: 75%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding-top: 20upx;
		padding-bottom: 20upx;
	}

	.row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.block {
		width: 60upx;
		height: 60upx;
		background-color: #d5d5d5;
		border: #9a9a9a solid 1px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.warning {
		color: #DD524D;
	}
	
	.desc{
		width: 75%;
		padding-top: 20upx;
	}

	image {
		width: 45upx;
		height: 45upx;
		padding-top: 10upx;
	}
</style>
