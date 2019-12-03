/*
 * @Author: zhangb
 * @Date: 2019-12-03 14:04:03
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-03 17:47:11
 * @Description:
 */
// import Fetch from "@hysight/fetch";

interface ApiProps {
    fetchSourceListData: () => void;
    fetchOperatorsListData: () => void;
}

const Api: ApiProps = {
    /* -----------------------左边侧边栏部分---------------------- */
    // 获取数据源列表
    fetchSourceListData() {

        return fetch("/hymodel/data/dataset/usertree")
        .then((res) => res.json())
        .catch((err) => {

            console.log(err);

        });

    },
    // 获取组件列表
    fetchOperatorsListData() {

        return fetch("/hymodel/analysis/operators")
        .then((res) => res.json())
        .catch((err) => {

            console.log(err);

        });

    },
};

export default Api;