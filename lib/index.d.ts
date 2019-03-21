declare module "react-native-swipe-list-view" {
    import {Component, ReactElement} from "react";
    import {
        FlatListProps,
        ListRenderItemInfo,
        ListView,
        ListViewProps,
        SectionListProps,
        SectionListRenderItem,
        StyleProp,
        ViewStyle
    } from "react-native";

    export type RenderItem<T> = ListRenderItemInfo<T> | SectionListRenderItem<T>

    export interface SwipeListViewComponentProps<T> {
        useFlatList?: boolean
        useSectionList?: boolean
        renderItem?: (rowData: RenderItem<T>, rowMap: { [key: string]: SwipeRow }) => ReactElement<any>
        renderHiddenItem?: (rowData: RenderItem<T>, rowMap: { [key: string]: SwipeRow }) => ReactElement<any>
        leftOpenValue?: number
        rightOpenValue?: number
        closeOnRowPress?: boolean
        closeOnRowOpen?: boolean
        closeOnRowBeginSwipe?: boolean
        closeOnScroll?: boolean
        disableLeftSwipe?: boolean
        disableRightSwipe?: boolean
        stopLeftSwipe?: number
        stopRightSwipe?: number
        directionalDistanceChangeThreshold?: number
        swipeToOpenPercent?: number
        swipeToClosePercent?: number
        swipeToOpenVelocityContribution?: number
        recalculateHiddenLayout?: boolean
        swipeGestureBegan?: (rowKey: string) => void
        onRowClose?: (rowKey: string, rowMap: { string: SwipeRow }) => void
        onRowDidClose?: (rowKey: string, rowMap: { string: SwipeRow }) => void
        onRowOpen?: (rowKey: string, rowMap: { string: SwipeRow }, toValue: number) => void
        onRowDidOpen?: (rowKey: string, rowMap: { string: SwipeRow }, toValue: number) => void
        onScrollEnabled?: (isEnableftOpenValueled: boolean) => void
        swipeRowStyle?: StyleProp<ViewStyle>
        listViewRef?: (ref: ListView) => void
        previewRowKey?: string
        previewDuration?: number
        previewOpenValue?: number
        previewOpenDelay?: number
        friction?: number
        tension?: number
        onSwipeValueChange?: (swipeData: { value: number, direction: 'left' | 'right', isOpen: boolean }) => void
        renderListView?: (props, setRefCallback, onScrollCallback, renderItemCallback) => ReactElement<ListView>
        previewFirstRow?: boolean
        previewRowIndex?: number
        renderRow?: (rowData, secId, rowId, rowMap) => ReactElement<any>
        renderHiddenRow?: (rowData, secId, rowId, rowMap) => ReactElement<any>
        shouldItemUpdate?: (currentItem: T, newItem: T) => void
    }

    export interface SwipeRowProps {
        closeOnRowPress?: boolean
        directionalDistanceChangeThreshold?: number
        friction?: number
        tension?: number
        leftOpenValue?: number
        rightOpenValue?: number
        stopLeftSwipe?: number
        stopRightSwipe?: number
        onRowPress?: () => void
        onRowOpen?: (toValue: number) => void
        onRowDidOpen?: (toValue: number) => void
        onRowClose?: () => void
        onRowDidClose?: () => void
        swipeToOpenPercent?: number
        swipeToClosePercent?: number
        disableLeftSwipe?: boolean
        disableRightSwipe?: boolean
        recalculateHiddenLayout?: boolean
        style?: StyleProp<ViewStyle>
        preview?: boolean
        previewDuration?: number
        previewOpenValue?: number
        onSwipeValueChange?: (swipeData: { value: number, direction: 'left' | 'right', isOpen: boolean }) => void
        swipeGestureBegan?: () => void
        swipeToOpenVelocityContribution?: number
        shouldItemUpdate?: (currentItem: any, newItem: any) => void
    }

    export type SwipeListViewProps<T> = SwipeListViewComponentProps<T> & (ListViewProps | FlatListProps<T> | SectionListProps<T>)

    export class SwipeListView<T> extends Component<SwipeListViewProps<T>> {}

    export class SwipeRow extends Component<SwipeRowProps> {
        closeRow()
    }
}