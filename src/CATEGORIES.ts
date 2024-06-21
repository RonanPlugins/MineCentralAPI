export namespace PLUGIN {
  export enum Type {
    ECONOMY,
    GAMEMODE,
    UTILITY,
    WORLD,
    RESOURCE_PACK,
    CHAT,
    COSMETIC,
    MISC,
    PROXY,
  }
}

export namespace SERVER {
  export enum Type {
    SURVIVAL,
    CREATIVE,
    PRISON,
    FACTIONS,
  }
}

export const CATEGORY = {
  PLUGIN: PLUGIN.Type,
  SERVER: SERVER.Type,
};
