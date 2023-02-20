import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./Screen/Home";
import { ProductSelected } from "./Screen/ProductSelected";




export function Router() {

    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/:id/:brand/:tipo/:modelo" element={<ProductSelected />} />
            </Route>
        </Routes>
    )
}