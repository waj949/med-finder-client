## readME file for the components folder :

###### This folder will hold all of the `axios` requests.<br>

we will be using [`axios`](https://github.com/axios/axios).<br>

All of the requests to the server **_must_** be in here .<br>

You might be tempted to make a `global function` that sends all your `requests` by using different params, but please refrain from doing that, it will mess up the pattern that we're using.<br>

Every server file should follow the pattern below:<br>

```
import axios from "axios";

export default {
example: async () => {
let res = await axios.get(`/api/example`);
return res.data || [];
}
};
```
