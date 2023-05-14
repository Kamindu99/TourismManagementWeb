import React, { useState, useMemo } from "react"

export function useObjectFieldPropertiesAsObject({ properties }) {
    return useMemo(() => Object.fromEntries(properties.map(({ name, content }) => ([name, content]))), [properties])
}