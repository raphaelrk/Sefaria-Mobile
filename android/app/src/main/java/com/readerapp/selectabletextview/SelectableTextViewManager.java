package com.readerapp.selectabletextview;

import android.content.Context;
import android.graphics.Typeface;
import android.os.Build;
import android.text.Html;
import android.text.Spanned;
import android.util.Log;
import android.view.ActionMode;
import android.view.Menu;
import android.view.MenuItem;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.facebook.yoga.YogaMeasureMode;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SelectableTextViewManager extends SimpleViewManager<SelectableTextView> {
    public static final String REACT_CLASS = "RCTSelectableTextView";
    public static final String[] FONTS = {"Taamey Frank Taamim Fix", "Amiri", "Heebo", "Open Sans", "Open Sans Hebrew"};
    public HashMap<String, Typeface> fontMap;
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public SelectableTextView createViewInstance(ThemedReactContext context){
        SelectableTextView view = new SelectableTextView(context);
        view.setTextIsSelectable(true);
        fontMap = new HashMap<>();
        for (String font : FONTS) {
            fontMap.put(font, Typeface.createFromAsset(context.getAssets(),"fonts/" + font + ".ttf"));
        }
        return view;
    }

    @ReactProp(name = "text")
    public void setText(SelectableTextView view, String text) {
        Spanned spanned;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            spanned = Html.fromHtml(text, Html.FROM_HTML_MODE_COMPACT);
        } else {
            spanned = Html.fromHtml(text);
        }
        view.setText(spanned);
    }

    @ReactProp(name = "font")
    public void setFont(SelectableTextView view, String font) {
        Typeface tf = fontMap.get(font);
        if (tf == null) { return; }
        view.setTypeface(tf);
    }

    @ReactProp(name = "menuItems")
    public void setMenuItems(SelectableTextView view, ReadableArray items) {
        List<String> result = new ArrayList<>(items.size());
        for (int i = 0; i < items.size(); i++) {
            result.add(items.getString(i));
        }

        registerSelectionListener(result.toArray(new String[items.size()]), view);
    }

    public void registerSelectionListener(final String[] menuItems, final SelectableTextView view) {
        view.setCustomSelectionActionModeCallback(new ActionMode.Callback() {
            @Override
            public boolean onPrepareActionMode(ActionMode mode, Menu menu) {
                // Called when action mode is first created. The menu supplied
                // will be used to generate action buttons for the action mode
                // Android Smart Linkify feature pushes extra options into the menu
                // and would override the generated menu items
                menu.clear();
                for (int i = 0; i < menuItems.length; i++) {
                    menu.add(0, i, 0, menuItems[i]);
                }
                return true;
            }

            @Override
            public boolean onCreateActionMode(ActionMode mode, Menu menu) {
                return true;
            }

            @Override
            public void onDestroyActionMode(ActionMode mode) {
                // Called when an action mode is about to be exited and
            }

            @Override
            public boolean onActionItemClicked(ActionMode mode, MenuItem item) {
                int selectionStart = view.getSelectionStart();
                int selectionEnd = view.getSelectionEnd();
                String selectedText = view.getText().toString().substring(selectionStart, selectionEnd);

                // Dispatch event
                onSelectNativeEvent(view, menuItems[item.getItemId()], selectedText, selectionStart, selectionEnd);

                mode.finish();

                return true;
            }

        });
    }

    public void onSelectNativeEvent(SelectableTextView view, String eventType, String content, int selectionStart, int selectionEnd) {
        WritableMap event = Arguments.createMap();
        event.putString("eventType", eventType);
        event.putString("content", content);
        event.putInt("selectionStart", selectionStart);
        event.putInt("selectionEnd", selectionEnd);

        // Dispatch
        ReactContext reactContext = (ReactContext) view.getContext();
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                view.getId(),
                "topSelection",
                event
        );
    }

    @Override
    public Map getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.builder()
                .put(
                        "topSelection",
                        MapBuilder.of(
                                "registrationName","onSelection"))
                .build();
    }
}
